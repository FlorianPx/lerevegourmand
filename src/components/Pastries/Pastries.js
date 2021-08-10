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
import Cake from "../../assets/images/cake.svg";

const defaultTheme = {
  titleBlock: "Pâtisseries & viennoiseries",
  logoBlock: Cake,
  themeColor: "pink",
  horizontalLocation: "left",
};

function handleClick() {}

function Pastries() {
  return (
    <PastriesContainer>
      <TitleBlock defaultTheme={defaultTheme} />
      <Container>
        <Image src={RaspberryPie} alt="Tarte aux framboises" />
        <Text>{text}</Text>
      </Container>
      <Button onClick={handleClick}>Montrez-moi la carte</Button>
    </PastriesContainer>
  );
}

export default Pastries;
