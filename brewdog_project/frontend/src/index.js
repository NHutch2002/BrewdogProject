import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import 'fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const rootElement = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
