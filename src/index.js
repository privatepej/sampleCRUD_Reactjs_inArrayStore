import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// style
import "./styles/app.css";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
