import React from "react";
import "./app.css";
import Create from "./components/Create";
function App() {
  return (
    <div className="bg-gray-900 h-full lg:h-screen">
      <div className="w-full text-center lg:text-left lg:pt-8 lg:pl-8">
        <h1 className="text-4xl font-light text-white lg:text-6xl">
          Color Palette
        </h1>
      </div>
      <Create />
    </div>
  );
}

export default App;
