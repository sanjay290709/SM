import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// FileName : Index.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : The main page of the website where all the routes and root elements will be located

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);