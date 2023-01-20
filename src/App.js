import React from "react";
import Hello from "./components/Hello.jsx";
import "./style.css";
import photo from "./images/IMG_0291.JPG";

export default function App() {
  return (
    <div>
      <h1>Webpack example</h1>
      <Hello />
      <div class="img">
        <img src={photo} />
      </div>
    </div>
  );
}
