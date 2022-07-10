import React from "react";

import TitleBlock from "../../TitleBlock/TitleBlock";
import { menuArray } from "./constants";
import {
  PriceContainer,
  Title,
  TextContainer,
  Wrapper,
  Subtitle,
} from "./styledComponents";

const defaultTheme = {
  titleBlock: "Formule à 13€",
  logoBlock: "",
  themeColor: "yellow",
  horizontalLocation: "center",
};

function Menu() {
  const formatMenu = menuArray.map((element, index) => (
    <Wrapper key={`step${index} - ${element.title}`}>
      <Title>
        {element.title}
        {element.subTitle && <Subtitle>{element.subTitle}</Subtitle>}
      </Title>
      {menuArray.length - 1 !== index && <span>+</span>}
    </Wrapper>
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
