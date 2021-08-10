import React from "react";

import Header from "./components/Header";
import Informations from "./components/Informations/Informations";
import Menu from "./components/Menu/Menu";
import Pastries from "./components/Pastries/Pastries";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Informations />
      <Menu />
      <Pastries />
    </div>
  );
}

export default App;
