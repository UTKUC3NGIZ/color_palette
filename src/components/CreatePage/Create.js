import React, { useState } from "react";

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
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center	 text-2xl m-4"
        >
          <label htmlFor="addProject" className="text-4xl">
            Yeni Proje Oluştur
          </label>
          <input
            type="text"
            value={addProject}
            onChange={(e) => setAddProject(e.target.value)}
            id="addProject"
            className="mx-10 w-full p-2 mx-4 my-8 focus:outline-none text-black"
          />
        </form>
      </div>
      <div className="m-4">
        <h2 className="text-3xl mb-2">Projelerim</h2>
        <div>
          {props.projects.map((project) => (
            <div key={project.id} className="my-4">
              <h3 className="text-xl pb-4">{project.name}</h3>
              <div className=" flex w-full">
                {project.colors.map((color, index) => (
                  <span
                    className="flex justify-center items-center w-full h-32"
                    key={index}
                    style={{ backgroundColor: `#${color}` }}
                  >
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
