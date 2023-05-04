import React from "react";
import "./app.css";

import Colors from "./components/ColorsPage/Colors";
import Create from "./components/CreatePage/Create";

function App() {
  return (
    <>
      <h1>Color Palette</h1>
      <Create />

      {/* <Colors /> */}
    </>
  );
}

export default App;
