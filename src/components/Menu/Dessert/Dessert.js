import React from "react";

import TitleBlock from "../../TitleBlock/TitleBlock";
import {
  DessertContainer,
  List,
  ListContainer,
  Text,
  Title,
} from "./styledComponents";
import { DessertArray } from "./constants";

const defaultTheme = {
  titleBlock: "Les desserts et boissons",
  logoBlock: "",
  themeColor: "pink",
  horizontalLocation: "right",
};

function Items() {
  const elements = DessertArray.map((element) => (
    <List key={element.name}>
      <Title>{element.name.toUpperCase()}</Title>
      <Text>{element.flavor}</Text>
    </List>
  ));
  return elements;
}

function Dessert() {
  return (
    <DessertContainer>
      <TitleBlock defaultTheme={defaultTheme} />
      <ListContainer>
        <Items />
      </ListContainer>
    </DessertContainer>
  );
}

export default Dessert;
