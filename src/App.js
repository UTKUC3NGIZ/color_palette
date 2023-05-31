import React from "react";
import "./app.css";
import Create from "./components/Create";
function App() {
  return (
    <div className="bg-gray-900 h-full">
      <div className="w-full text-center">
        <h1 className="text-4xl font-light text-white">Color Palette</h1>
      </div>
      <Create />
    </div>
  );
}

export default App;
