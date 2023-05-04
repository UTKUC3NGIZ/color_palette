import React from "react";
import "./style.css";

function Create() {
  return (
    <>
      <div>
        <label htmlFor="">Yeni Proje Oluştur</label>
        <input type="text" />
      </div>
      <div>
        <h2>Projelerim</h2>
        <div>
          <span>Proje 1</span>
          <span>Proje 2</span>
          <span>Proje 3</span>
          <span>Proje 4</span>
        </div>
      </div>
    </>
  );
}

export default Create;
