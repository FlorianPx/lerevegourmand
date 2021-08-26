import React from "react";

import { Container } from "./styledComponents";
import { dessertArray } from "./constants";
import Card from "../Card/Card";

const defaultTheme = {
  titleBlock: "Les desserts et boissons",
  logoBlock: "",
  themeColor: "pink",
  horizontalLocation: "right",
};

function Dessert() {
  return (
    <Container>
      <Card defaultTheme={defaultTheme} propsArray={dessertArray} />
    </Container>
  );
}

export default Dessert;
