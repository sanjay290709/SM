import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

// FileName : App.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : The main page of the website where all the components will render

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;