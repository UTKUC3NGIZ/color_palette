import React, { useState } from "react";
import { TiTimes, TiPlus } from "react-icons/ti";

import "./style.css";
function Colors() {
  const [palette, setPalette] = useState([
    {
      color: "7A3B69",
    },
    {
      color: "9A879D",
    },
    {
      color: "121212",
    },
  ]);
  return (
    <>
      <div className="colors">
        <h2>Calculator App</h2>
        <section>
          {palette.map((color, index) => (
            <div style={{ backgroundColor: `#${color.color}` }} key={index}>
              <span>
                <span>
                  <TiPlus />
                </span>
                <div>
                  <span>
                    <TiTimes />
                  </span>
                  <h3>{color.color}</h3>
                </div>
                <span>
                  <TiPlus />
                </span>
              </span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Colors;
