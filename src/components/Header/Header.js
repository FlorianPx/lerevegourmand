import React from "react";

import {
  HeaderContainer,
  LogoTitle,
  Title,
  LogoCake,
} from "./styledComponents";
import { title } from "./constants";
import Navbar from "./Navbar";
import Picture from "./Picture";
import LogoCakePng from "../../assets/images/logoCake.png";

function Header() {
  return (
    <HeaderContainer>
      <LogoTitle>
        <LogoCake src={LogoCakePng} alt="Cupcake du Rêve Gourmand" />
        <Title>{title.toUpperCase()}</Title>
      </LogoTitle>
      <Navbar />
      <Picture />
    </HeaderContainer>
  );
}

export default Header;
