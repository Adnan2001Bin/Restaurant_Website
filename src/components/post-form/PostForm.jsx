import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "..";
import appwriteService from "../../apppwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        dishName: post?.dishName || "",
        slug: post?.$id || "",
        dishDetails: post?.dishDetails || "",
        status: post?.status || "active",
        dishPrice: post?.dishPrice || "",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.dishImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        dishImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.dishImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
          console.log(dbPost.$id)
        }
      }
    }
  };

  // const submit = async (data) => {
  //   try {
  //     let dbPost;

  //     if (post) {
  //       console.log("Updating existing post...");
  //       const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

  //       if (file) {
  //         await appwriteService.deleteFile(post.dishImage);
  //         console.log("File deleted:", post.dishImage);
  //       }

  //       dbPost = await appwriteService.updatePost(post.$id, {
  //         ...data,
  //         dishImage: file ? file.$id : undefined,
  //       });
  //     } else {
  //       console.log("Creating new post...");
  //       const file = await appwriteService.uploadFile(data.image[0]);
  //       if (file) {
  //         console.log("File uploaded successfully:", file);
  //         const fileId = file.$id;
  //         data.dishImage = fileId;

  //         dbPost = await appwriteService.createPost({
  //           ...data,
  //           userId: userData.$id,
  //         });
  //       }
  //     }

  //     if (dbPost) {
  //       console.log("Navigating to:", `/post/${dbPost.$id}`);
  //       navigate(`/post/${dbPost.$id}`);
  //     } else {
  //       console.error("Failed to create/update post.");
  //     }
  //   } catch (error) {
  //     console.error("Error during submit:", error);
  //   }
  // };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "dishName") {
        setValue("slug", slugTransform(value.dishName), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Dish Name :"
          placeholder="Dish Name"
          className="mb-4"
          {...register("dishName", { required: true })}
        />

        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />

        <Input
          label="Dish Price :"
          placeholder="Dish Price"
          className="mb-4"
          {...register("dishPrice", { required: true })}
        />

        <Input
          label="Dish Details :"
          name="dishDetails"
          className="mb-4"
          {...register("dishDetails", { required: true })}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Dish Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.dishImage)}
              alt={post.dishName}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
