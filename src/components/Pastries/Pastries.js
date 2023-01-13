import React from "react";

import {
  PastriesContainer,
  Container,
  Text,
  Image,
  Button,
} from "./styledComponents";
import TitleBlock from "../TitleBlock/TitleBlock";
import { text } from "./constants";
import RaspberryPie from "../../assets/images/raspberryPie.png";
import Cake from "../../assets/svg/cake.svg";
import Card from "../../assets/pdf/carte.pdf";

const defaultTheme = {
  titleBlock: "Pâtisseries & viennoiseries",
  logoBlock: Cake,
  themeColor: "pink",
  horizontalLocation: "left",
};

function Pastries() {
  return (
    <PastriesContainer id="patisseries">
      <TitleBlock defaultTheme={defaultTheme} />
      <Container>
        <Image src={RaspberryPie} alt="Tarte aux framboises" />
        <Text dangerouslySetInnerHTML={{ __html: text }} />
      </Container>
      <Button href={Card} target="_blank">
        Télécharger la carte
      </Button>
    </PastriesContainer>
  );
}

export default Pastries;
