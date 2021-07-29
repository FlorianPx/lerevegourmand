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
  titleBlock: "Les dessert et boissons",
  logoBlock: "",
  themeColor: "pink",
  horizontalLocation: "right",
};

const elementsListe = DessertArray.map((element) => (
  <List key={element.name}>
    <Title>{element.name.toUpperCase()}</Title>
    <Text>{element.flavor}</Text>
  </List>
));

function Dessert() {
  return (
    <DessertContainer>
      <TitleBlock defaultTheme={defaultTheme} />
      <ListContainer>{elementsListe}</ListContainer>
    </DessertContainer>
  );
}

export default Dessert;
