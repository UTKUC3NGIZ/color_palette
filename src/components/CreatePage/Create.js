import React from "react";
import "./style.css";

function Create() {
  return (
    <>
      <div className="createProject">
        <label htmlFor="">Yeni Proje Oluştur</label>
        <input type="text" />
      </div>
      <div className="lastProject">
        <h2>Projelerim</h2>
        <div>
          <div>
            <h3>Calculator App</h3>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div>
            <h3>Calculator App</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
