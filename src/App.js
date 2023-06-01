import React, { useState } from "react";
import "./app.css";
import Create from "./components/Create";
import Project from "./components/Project";
function App() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      projectName: "Deneme1",
      colors: ["1b1b1b", "ababab"],
    },
    {
      id: 1,
      projectName: "Deneme1",
      colors: ["0x0x0x", "1b1b1b", "ababab"],
    },
    {
      id: 2,
      projectName: "Deneme1",
      colors: ["0x0x0x", "1b1b1b", "ababab"],
    },
  ]);
  return (
    <div className="bg-gray-900 h-screen">
      <div className="w-full text-center lg:text-left lg:pt-8 lg:pl-8">
        <h1 className="text-4xl font-light text-white lg:text-6xl">
          Color Palette
        </h1>
      </div>
      <Create projects={projects} setProjects={setProjects} />
      {/* <Project /> */}
    </div>
  );
}

export default App;
