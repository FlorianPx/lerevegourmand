import React from "react";

import TitleBlock from "../../TitleBlock/TitleBlock";
import {
  DessertContainer,
  List,
  ListContainer,
  Text,
  Title,
} from "./styledComponents";
import { FoodPriceSection, Block, Price } from "../Food/styledComponents";
import { DessertArray } from "./constants";

const defaultTheme = {
  titleBlock: "Les desserts et boissons",
  logoBlock: "",
  themeColor: "pink",
  horizontalLocation: "right",
};

function Items() {
  const elements = DessertArray.map((element, index) => (
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
