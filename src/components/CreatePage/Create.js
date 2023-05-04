import React, { useState } from "react";
import "./style.css";

function Create(props) {
  const [addProject, setAddProject] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const idGenerator = props.projects.length;
    props.setProjects([
      ...props.projects,
      { id: idGenerator, name: addProject, colors: ["000", "fff"] },
    ]);
    setAddProject("");
  }

  return (
    <>
      <div className="createProject">
        <form onSubmit={handleSubmit}>
          <label htmlFor="addProject">Yeni Proje Oluştur</label>
          <input
            type="text"
            value={addProject}
            onChange={(e) => setAddProject(e.target.value)}
            id="addProject"
          />
        </form>
      </div>
      <div className="lastProject">
        <h2>Projelerim</h2>
        <div>
          {props.projects.map((project) => (
            <div key={project.id}>
              <h3>{project.name}</h3>
              <div>
                {project.colors.map((color, index) => (
                  <span key={index} style={{ backgroundColor: `#${color}` }}>
                    {color}
                  </span>
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
