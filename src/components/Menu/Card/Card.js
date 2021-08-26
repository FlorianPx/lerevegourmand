import React from "react";

import TitleBlock from "../../TitleBlock/TitleBlock";
import {
  Section,
  List,
  ListContainer,
  Price,
  Text,
  Title,
  Block,
} from "./styledComponents";

function Items({ propsArray }) {
  const elements = propsArray.map((element, index) => (
    <List key={`${element.title} - ${index}`}>
      <Section>
        <Title>{element.title.toUpperCase()}</Title>
        {element.title && element.price && <Block />}
        <Price>
          {element.price &&
            Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
            }).format(element.price)}
        </Price>
      </Section>
      <Text dangerouslySetInnerHTML={{ __html: element.subtitle }} />
    </List>
  ));

  return elements;
}

function Card({ defaultTheme, propsArray }) {
  return (
    <>
      <TitleBlock defaultTheme={defaultTheme} />
      <ListContainer>
        <Items propsArray={propsArray} />
      </ListContainer>
    </>
  );
}

export default Card;
