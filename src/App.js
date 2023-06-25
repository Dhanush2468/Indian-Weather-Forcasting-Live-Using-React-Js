import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        | Developed by{" "}
        <a target="_blank" href="https://whitedevil2468.netlify.app/">
          Dhanush Gollavilli 
        </a>{" "}
        <a target="_blank" href="https://shaheenparveenn.netlify.app/">
        ⧼&̼⧽ Shaheen Parveen |
        </a>{" "}

      </div>
    </React.Fragment>
  );
}

export default App;
