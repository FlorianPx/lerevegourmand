import React from "react";

import {
  FoundMeContainer,
  Card,
  Anchor,
  Image,
  TapLogo,
  Text,
  Title,
} from "./styledComponents";
import TitleBlock from "../TitleBlock/TitleBlock";
import MapSvg from "../../assets/svg/map.svg";
import TapSvg from "../../assets/svg/tap.svg";
import { foundMeArray } from "./constants";

const defaultTheme = {
  titleBlock: "Où me trouver ?",
  logoBlock: MapSvg,
  themeColor: "yellow",
  horizontalLocation: "right",
};

function CardEmplacement() {
  const elements = foundMeArray.map((card) => (
    <Card key={card.title}>
      <Anchor target="_blank" rel="noreferrer" href={card.url}>
        <Image src={card.image} alt={card.title} />
        <TapLogo src={TapSvg} alt="Accéder à l'itinéraire" />
      </Anchor>
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
