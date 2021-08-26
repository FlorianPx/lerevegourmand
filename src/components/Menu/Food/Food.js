import React from "react";

import { Container } from "./styledComponents";
import { foodArray } from "./constants";
import Card from "../Card/Card";

const defaultTheme = {
  titleBlock: "Les galettes",
  logoBlock: "",
  themeColor: "pink",
  horizontalLocation: "left",
};

function Food() {
  return (
    <Container>
      <Card defaultTheme={defaultTheme} propsArray={foodArray} />
    </Container>
  );
}

export default Food;
