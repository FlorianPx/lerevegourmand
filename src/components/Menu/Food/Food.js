import React from "react";

import TitleBlock from "../../TitleBlock/TitleBlock";
import {
  FoodContainer,
  FoodPriceSection,
  List,
  ListContainer,
  Price,
  Text,
  Title,
  Block,
} from "./styledComponents";
import { foodArray } from "./constants";

const defaultTheme = {
  titleBlock: "Les galettes",
  logoBlock: "",
  themeColor: "pink",
  horizontalLocation: "left",
};

function Items() {
  const elements = foodArray.map((element) => (
    <List key={element.name}>
      <FoodPriceSection>
        <Title>{element.name.toUpperCase()}</Title>
        <Block />
        <Price>
          {Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(element.price)}
        </Price>
      </FoodPriceSection>
      <Text>{element.foodstuffs}</Text>
    </List>
  ));

  return elements;
}

function Food() {
  return (
    <FoodContainer>
      <TitleBlock defaultTheme={defaultTheme} />
      <ListContainer>
        <Items />
      </ListContainer>
    </FoodContainer>
  );
}

export default Food;
