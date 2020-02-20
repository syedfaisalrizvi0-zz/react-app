import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Apps from "./Apps.js";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Apps />
  </BrowserRouter>,
  rootElement
);
