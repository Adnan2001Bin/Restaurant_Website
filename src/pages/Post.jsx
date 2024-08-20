import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../apppwrite/config";
import { Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.dishImage);
        navigate("/all-menu");
      }
    });
  };

  return post ? (

    <div className="w-full flex justify-center bg-white my-4">
      <div className=" w-96 shadow-2xl bg-gray-50 text-stone-900 p-2">
        <figure>
          <img
            src={appwriteService.getFilePreview(post.dishImage)}
            alt={post.dishName}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <h1 className="font-fontFooter1 text-xl font-medium mb-1 mt-1">
            {post.dishName}
          </h1>
          <div className="browser-css font-fontFooter1 text-base mb-4">
            {parse(post.dishDetails)}
          </div>
          <h1 className="font-fontFooter1 text-lg font-medium">
            ${post.dishPrice}
          </h1>
          {isAuthor && (
            <div className="flex justify-end space-x-4">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="bg-green-500 w-20">Edit</Button>
              </Link>
              <Button className="bg-red-700 w-20" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;
}






// <div className="py-8">
//     <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
//       <img
//         src={appwriteService.getFilePreview(post.dishImage)}
//         alt={post.dishName}
//         className="rounded-xl"
//       />

//       {isAuthor && (
//         <div className="absolute right-6 top-6">
//           <Link to={`/edit-post/${post.$id}`}>
//             <Button bgColor="bg-green-500" className="mr-3">
//               Edit
//             </Button>
//           </Link>
//           <Button bgColor="bg-red-500" onClick={deletePost}>
//             Delete
//           </Button>
//         </div>
//       )}
//     </div>
//     <div className="w-full mb-6 flex justify-center" >
//       <h1 className="text-2xl font-bold">{post.dishName}</h1>
//       <h1 className="text-2xl font-bold">{post.dishPrice}</h1>
//     </div>
//     {/* <div className="browser-css">{parse(post.content)}</div> */}
// </div>
