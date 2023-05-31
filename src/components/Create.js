import React from "react";

function Create() {
  return (
    <div className="lg:flex">
      <div className="lg:w-1/3   border-r-2 border-gray-800 lg:pr-8 border-t-2 lg:border-b-2 mt-8 pt-8 lg:pl-8 lg:pb-8">
        <div className=" w-full relative text-white  ">
          <h2 className="text-center text-2xl  mb-2 lg:text-left  lg:text-3xl">
            Yeni Proje
          </h2>
          <input
            type="text"
            id="createBtn"
            name="createBtn"
            className="w-full bg-gray-800 text-center focus:outline-none h-10 text-white lg:text-left"
          />
          {/* <label htmlFor="createBtn" className="absolute right-0 ">
          ADD
        </label> */}
        </div>
        <div>
          <h2 className="text-center text-2xl text-white mb-2 lg:text-3xl lg:text-left my-4">
            Renk Ekle
          </h2>
          <div className="flex flex-col mx-2 ">
            <div className="flex mb-6">
              <span className="w-[60%] h-10 mr-4 bg-red-500"></span>
              <input
                type="text"
                className=" bg-transparent border-solid border-2 border-gray-800 w-[40%] focus:outline-none text-white"
              />
            </div>
            <div className="flex mb-6">
              <span className="w-[60%] h-10 mr-4 bg-red-500"></span>
              <input
                type="text"
                className=" bg-transparent border-solid border-2 border-gray-800 w-[40%] focus:outline-none text-white"
              />
            </div>
            <div className="flex mb-6">
              <span className="w-[60%] h-10 mr-4 bg-red-500"></span>
              <input
                type="text"
                className=" bg-transparent border-solid border-2 border-gray-800 w-[40%] focus:outline-none text-white"
              />
            </div>
            <div className="flex mb-6">
              <span className="w-[60%] h-10 mr-4 bg-red-500"></span>
              <input
                type="text"
                className=" bg-transparent border-solid border-2 border-gray-800 w-[40%] focus:outline-none text-white"
              />
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left ">
          <button className="text-2xl text-white lg:text-3xl ">Kaydet</button>
        </div>
      </div>
      <div className="lg:w-2/3 lg:pr-8 border-t-2 mt-8 pt-8 border-gray-800 lg:pl-8 lg:bg-slate-800">
        <div className="text-center  lg:text-left">
          <h2 className="text-white text-2xl lg:text-3xl">Projelerim</h2>
        </div>
        <div className="lg:grid lg:grid-cols-2">
          <div className="mt-5 mx-2 ">
            <h3 className="text-2xl text-white mb-2 lg:text-3xl">Proje 1</h3>
            <div className="flex flex-row  ">
              <span className="flex-1 bg-red-500 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-400 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-300 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-200 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-100 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-100 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-100 h-10 lg:h-12"></span>
            </div>
          </div>
          <div className="mt-5 mx-2 ">
            <h3 className="text-2xl text-white mb-2 lg:text-3xl">Proje 1</h3>
            <div className="flex flex-row  ">
              <span className="flex-1 bg-red-500 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-400 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-300 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-200 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-100 h-10 lg:h-12"></span>
            </div>
          </div>
          <div className="mt-5 mx-2 ">
            <h3 className="text-2xl text-white mb-2 lg:text-3xl">Proje 1</h3>
            <div className="flex flex-row  ">
              <span className="flex-1 bg-red-500 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-400 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-300 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-200 h-10 lg:h-12"></span>
              <span className="flex-1 bg-red-100 h-10 lg:h-12"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
