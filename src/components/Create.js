import React, { useState } from "react";

function Create(props) {
  const [project, setProject] = useState("");

  const projectName = (e) => {
    setProject(e.target.value);
  };

  function addProject() {
    const newProject = {
      id: props.projects.length,
      projectName: project,
      colors: ["000000", "ffffff"],
    };
    props.setProjects([...props.projects, newProject]);
    setProject("");
  }
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
            className="w-full bg-gray-800 text-center focus:outline-none h-10 text-white lg:text-left pl-2 text-2xl"
            value={project}
            onChange={projectName}
          />
        </div>

        <div className="text-center lg:text-left mt-4">
          <button
            className="text-2xl text-white lg:text-3xl "
            onClick={addProject}
          >
            Kaydet
          </button>
        </div>
      </div>
      <div className="lg:w-2/3 lg:p-8 border-t-2 mt-8 pt-8 border-gray-800  lg:bg-slate-800">
        <div className="text-center  lg:text-left">
          <h2 className="text-white text-2xl lg:text-3xl">Projelerim</h2>
        </div>
        <div className="lg:grid lg:grid-cols-2">
          {props.projects.map((eleman) => (
            <div className="mt-5 mx-2 " key={eleman.id}>
              <h3 className="text-2xl text-white mb-2 lg:text-3xl">
                {eleman.projectName}
              </h3>
              <div className="flex flex-row  ">
                {eleman.colors.map((colors) => (
                  <span
                    className="flex-1  h-10 lg:h-12"
                    style={{ backgroundColor: `#${colors}` }}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Create;
