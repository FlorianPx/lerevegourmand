import React from "react";

import { presentationTextOne, presentationTextTwo } from "./constants";
import { TextContainer } from "./styledComponents";

function Text() {
  return (
    <TextContainer>
      <p>{presentationTextOne}</p>
      <p>{presentationTextTwo}</p>
    </TextContainer>
  );
}

export default Text;
