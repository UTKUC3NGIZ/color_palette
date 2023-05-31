import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function Project() {
  return (
    <div>
      <div className="pt-8 mt-8  border-t-2 border-gray-800 ">
        <h1 className="text-white text-2xl ml-2 sm:text-3xl md:text-4xl">Proje 1</h1>
      </div>
      <div>
        <div className="grid grid-cols-3 justify-items-center mt-8">
          <span className="rounded-full border w-3/4 aspect-square mb-5 text-black flex items-center justify-center bg-white sm:text-xl md:text-2xl">
            #000000
          </span>
          <span className="rounded-full border w-3/4 aspect-square mb-5 text-black flex items-center justify-center bg-white sm:text-xl md:text-2xl ">
            #000000
          </span>
          <span className="rounded-full border w-3/4 aspect-square mb-5 text-black flex items-center justify-center bg-white sm:text-xl md:text-2xl ">
            #000000
          </span>
          <span className="rounded-full border w-3/4 aspect-square mb-5 text-black flex items-center justify-center bg-white sm:text-xl md:text-2xl ">
            #000000
          </span>
          <span className="rounded-full border w-3/4 aspect-square mb-5 text-black flex items-center justify-center bg-white sm:text-xl md:text-2xl ">
            #000000
          </span>
          <span className="rounded-full border w-3/4 aspect-square mb-5 text-white flex items-center justify-center text-3xl border-gray-800 ">
            <AiOutlinePlus />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
