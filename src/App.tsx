import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageZoom from "./components/ImageZoom";

// const IMAGE = "elephant.jpg";
// const IMAGE = "lion.jpg";
const IMAGE = "tree.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ImageZoom src={IMAGE} />
      </div>
    </div>
  );
}

export default App;
