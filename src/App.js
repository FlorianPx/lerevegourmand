import React from "react";

import Header from "./components/Header";
import Informations from "./components/Informations/Informations";
import Menu from "./components/Menu/Menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Informations />
      <Menu />
    </div>
  );
}

export default App;
