import React from "react";
import appwriteService from "../apppwrite/config";
import parse from "html-react-parser";

import { Link } from "react-router-dom";

function PostCard({ $id, dishName, dishImage, dishDetails ,dishPrice}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-[#f5f5d6] p-4 rounded-lg shadow-md w-80">
        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src={appwriteService.getFilePreview(dishImage)}
            alt={dishName}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{dishName}</h2>
            <p className="text-gray-600 text-sm">{parse(dishDetails)}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-gray-900">${dishPrice}</span>
              <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-lg shadow">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
//  <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={appwriteService.getFilePreview(dishImage)} alt={dishName}
//                 className='rounded-xl' />

//             </div>
//             <h2
//             className='text-xl font-bold'
//             >{dishName}</h2>

//         </div>
