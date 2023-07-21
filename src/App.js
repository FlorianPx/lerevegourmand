import React, { useEffect, useState } from "react";

import { WebsiteClosingModal } from "./components/WebsiteClosingModal/WebsiteClosingModal";
import Informations from "./components/Informations/Informations";
import Pastries from "./components/Pastries/Pastries";
import { Modal } from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [modalContent, setModalContent] = useState({
    body: null,
    title: null,
  });
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (content) => {
    setIsOpen(true);
    setModalContent(content);
  };

  useEffect(() => {
    openModal({
      title: "",
      body: <WebsiteClosingModal />,
    });
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal closeModal={closeModal} content={modalContent} isOpen={isOpen} />
      <div className="App">
        <Header />
        <Informations />
        <Menu />
        <Pastries />
      </div>
      <Footer />
    </>
  );
}

export default App;
