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
  const elements = foodArray.map((element, index) => (
    <List key={`${element.name} - ${index}`}>
      <FoodPriceSection>
        <Title>{element.name.toUpperCase()}</Title>
        {element.name && element.price && <Block />}
        <Price>
          {element.price &&
            Intl.NumberFormat("fr-FR", {
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
