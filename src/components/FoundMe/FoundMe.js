import React from "react";

import { FoundMeContainer, Card, Image, Text, Title } from "./styledComponents";
import TitleBlock from "../TitleBlock/TitleBlock";
import MapLogo from "../../assets/svg/map.svg";
import { foundMeArray } from "./constants";

const defaultTheme = {
  titleBlock: "Où me trouver ?",
  logoBlock: MapLogo,
  themeColor: "yellow",
  horizontalLocation: "right",
};

function CardEmplacement() {
  const elements = foundMeArray.map((card) => (
    <Card key={card.title}>
      <a target="_blank" rel="noreferrer" href={card.url}>
        <Image src={card.image} alt={card.title} />
      </a>
      <Title>{card.title}</Title>
      <Text>{card.text}</Text>
    </Card>
  ));
  return elements;
}

function FoundMe() {
  return (
    <FoundMeContainer>
      <TitleBlock defaultTheme={defaultTheme} />
      <CardEmplacement />
    </FoundMeContainer>
  );
}

export default FoundMe;
