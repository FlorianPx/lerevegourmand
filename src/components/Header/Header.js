import React from "react";

import { title } from "./constants";
import Navbar from "./Navbar";
import Picture from "./Picture";
import { HeaderContainer, LogoTitle } from "./styledComponents";

function Header() {
  return (
    <HeaderContainer>
      <LogoTitle>{title.toUpperCase()}</LogoTitle>
      <Navbar />
      <Picture />
    </HeaderContainer>
  );
}

export default Header;
