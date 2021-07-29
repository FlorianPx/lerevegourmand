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

const formatMenu = menuArray.map((element) => (
  <Title key={element.step}>{element.step}</Title>
));

function Price() {
  return (
    <PriceContainer>
      <TitleBlock defaultTheme={defaultTheme} />
      <TextContainer>{formatMenu}</TextContainer>
    </PriceContainer>
  );
}

export default Price;
