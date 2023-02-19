import React from "react";
import { createRoot} from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import {Application} from "./Application";


const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);


