import React from "react";
import ReactDOM from "react-dom"
import { App } from "./index.js"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root)
})