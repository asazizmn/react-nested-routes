/**
 * index.js
 * - React file that specifies the main entry point
 * - It sorresponds to the public index.html file
 */


import React from "react";
import ReactDOM from "react-dom";

// please update this to "./App.v1" to test version 1
import App from "./App.v2";


ReactDOM.render(<App />, document.getElementById("root"));