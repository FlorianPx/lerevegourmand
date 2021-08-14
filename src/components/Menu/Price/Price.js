import React from "react";

import TitleBlock from "../../TitleBlock/TitleBlock";
import { menuArray } from "./constants";
import { PriceContainer, Title, TextContainer } from "./styledComponents";

const defaultTheme = {
  titleBlock: "La formule à 12€",
  logoBlock: "",
  themeColor: "yellow",
  horizontalLocation: "center",
};

function Menu() {
  const formatMenu = menuArray.map((element, index) => (
    <Title key={`step${index} - ${element}`}>
      {element}{" "}
      {menuArray.length - 1 !== index && (
        <span>
          <br />+
        </span>
      )}
    </Title>
  ));

  return formatMenu;
}

function Price() {
  return (
    <PriceContainer>
      <TitleBlock defaultTheme={defaultTheme} />
      <TextContainer>
        <Menu />
      </TextContainer>
    </PriceContainer>
  );
}

export default Price;
