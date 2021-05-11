import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.scss";
import App from "./App";

// axios.defaults.baseURL = "http://localhost:3080/api";
axios.defaults.baseURL = "http://localhost:8000";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
