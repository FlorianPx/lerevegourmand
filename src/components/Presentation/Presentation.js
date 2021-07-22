import React from "react";

import TitleBlock from "../TitleBlock/TitleBlock";
import Text from "./Text";
import { PresentationContainer } from "./styledComponents";

function Presentation() {
  return (
    <PresentationContainer>
      <TitleBlock />
      <Text />
    </PresentationContainer>
  );
}

export default Presentation;
