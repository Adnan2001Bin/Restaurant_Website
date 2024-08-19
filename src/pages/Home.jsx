import React, { useEffect, useState } from "react";
import appwriteService from "../apppwrite/config";

import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // if (posts.length === 0) {
  //     return (
  //         <div className="w-full py-8 mt-4 text-center">
  //             <Container>
  //                 <div className="flex flex-wrap">
  //                     <div className="p-2 w-full">
  //                         <h1 className="text-2xl font-bold hover:text-gray-500">
  //                             Login to read posts
  //                         </h1>
  //                     </div>
  //                 </div>
  //             </Container>
  //         </div>
  //     )
  // }
  return (
    <div className="w-full h-screen">
        <div className="absolute h-full overflow-hidden">
          <img
            src="public\assets\Header\hero-bg.jpg"
            alt="Burger and Fries"
            className="w-full h-full object-cover"
          />
          <div className="absolute w-1/2 h-96 inset-0 flex flex-col justify-center items-start text-start text-white ml-56 mt-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-fontFooter ">
              Fast Food Restaurant
            </h1>
            <p className="text-base md:text-base text-gray-300 mb-6">
              "Welcome to Savory Haven – Where Culinary Art Meets Comfort.
              Experience the finest blend of tradition and innovation in every
              bite. Join us for a journey of flavors, crafted with passion and
              served with care."
            </p>
            <a
              href="#"
              className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500"
            >
              Order Now
            </a>
          </div>
        </div>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
    </div>
  );
}

export default Home;
