import React from "react";

import Header from "./components/Header";
import Informations from "./components/Informations/Informations";
import Menu from "./components/Menu/Menu";
import Pastries from "./components/Pastries/Pastries";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bodyContainer">
        <Header />
        <Informations />
        <Menu />
        <Pastries />
      </div>
      <Footer />
    </div>
  );
}

export default App;
