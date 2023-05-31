import React from "react";

function Create() {
  return (
    <div>
      <div>
        <div className="my-8 w-full relative text-white border-t-2 border-gray-800 pt-8">
          <h2 className="text-center text-2xl  mb-2">Yeni Proje</h2>
          <input
            type="text"
            id="createBtn"
            name="createBtn"
            className="w-full bg-gray-800 text-center focus:outline-none h-10 text-white"
          />
          {/* <label htmlFor="createBtn" className="absolute right-0 ">
          ADD
        </label> */}
        </div>
        <div>
          <h2 className="text-center text-2xl text-white mb-2">Renk Ekle</h2>
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
          </div>
        </div>
        <div className="text-center ">
          <button className="text-2xl text-white">Kaydet</button>
        </div>
      </div>
      <div className="text-center my-8  border-t-2 border-gray-800 pt-8">
        <h2 className="text-white text-2xl  ">Projelerim</h2>
      </div>
      <div className="mt-5 mx-2">
        <h3 className="text-2xl text-white mb-2">Proje 1</h3>
        <div className="flex flex-row  ">
          <span className="flex-1 bg-red-500 h-10"></span>
          <span className="flex-1 bg-red-400 h-10"></span>
          <span className="flex-1 bg-red-300 h-10"></span>
          <span className="flex-1 bg-red-200 h-10"></span>
          <span className="flex-1 bg-red-100 h-10"></span>
          <span className="flex-1 bg-red-100 h-10"></span>
          <span className="flex-1 bg-red-100 h-10"></span>
        </div>
      </div>
      <div className="mt-5 mx-2">
        <h3 className="text-2xl text-white mb-2">Proje 1</h3>
        <div className="flex flex-row  ">
          <span className="flex-1 bg-red-500 h-10"></span>
          <span className="flex-1 bg-red-400 h-10"></span>
          <span className="flex-1 bg-red-300 h-10"></span>
          <span className="flex-1 bg-red-200 h-10"></span>
          <span className="flex-1 bg-red-100 h-10"></span>
        </div>
      </div>
      <div className="mt-5 mx-2">
        <h3 className="text-2xl text-white mb-2">Proje 1</h3>
        <div className="flex flex-row  ">
          <span className="flex-1 bg-red-500 h-10"></span>
          <span className="flex-1 bg-red-400 h-10"></span>
          <span className="flex-1 bg-red-300 h-10"></span>
          <span className="flex-1 bg-red-200 h-10"></span>
          <span className="flex-1 bg-red-100 h-10"></span>
        </div>
      </div>
    </div>
  );
}

export default Create;
