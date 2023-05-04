import React, { useState } from "react";
import "./style.css";
function Colors() {
  const [palette, setPalette] = useState([
    {
      color: "7A3B69",
    },
    {
      color: "9A879D",
    },
  ]);
  return (
    <>
      <div className="colors">
        <h2>Deneme Projesi</h2>
        <section>
          {palette.map((color, index) => (
            <div style={{ backgroundColor: `#${color.color}` }} key={index}>
              <span>
                <span>+</span>
                <div>
                  <span>x</span>
                  <h3>{color.color}</h3>
                </div>
                <span>+</span>
              </span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Colors;
