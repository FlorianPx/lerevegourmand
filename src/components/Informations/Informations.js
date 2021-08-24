import React from "react";
import FoundMe from "../FoundMe/FoundMe";
import Presentation from "../Presentation/Presentation";
import { InformationContainer } from "./styledComponents";

function Informations() {
  return (
    <InformationContainer id="foodtruck">
      <Presentation />
      <FoundMe />
    </InformationContainer>
  );
}

export default Informations;
