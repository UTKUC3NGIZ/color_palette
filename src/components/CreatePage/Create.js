import React, { useState } from "react";
import "./style.css";

function Create() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      name: "calculator App",
      colors: ["000", "fff", "ccc"],
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
    <>
      <div className="createProject">
        <label htmlFor="">Yeni Proje Oluştur</label>
        <input type="text" />
      </div>
      <div className="lastProject">
        <h2>Projelerim</h2>
        <div>
          {/* <div>
            <h3>Calculator App</h3>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div> */}
          {projects.map((project) => (
            <div key={project.id}>
              <h3>{project.name}</h3>
              <div>
                {project.colors.map((color, index) => (
                  <span key={index} style={{ backgroundColor: `#${color}` }} >{color}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Create;
