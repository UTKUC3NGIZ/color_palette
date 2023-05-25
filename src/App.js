import React, { useState } from "react";
import "./app.css";

import Colors from "./components/ColorsPage/Colors";
import Create from "./components/CreatePage/Create";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      name: "calculator App",
      colors: ["000", "fff", "ccc", "ddd", "aaa", "343", "222"],
    },
    {
      id: 1,
      name: "calculator App",
      colors: ["000", "fff", "ccc"],
    },
    {
      id: 2,
      name: "calculator App",
      colors: ["000", "fff", "ccc"],
    },
  ]);
  return (
    <div className="bg-gray-900 h-screen text-neutral-50 ">
      <h1 className=" text-4xl font-semibold font-serif p-4 ">Color Palette</h1>
      <Create projects={projects} setProjects={setProjects} />

      {/* <Colors  projects={projects} /> */}
    </div>
  );
}

export default App;
