import React from "react";

import { presentationTextOne, presentationTextTwo } from "./constants";
import { TextContainer } from "./styledComponents";

function Text() {
  return (
    <TextContainer>
      <p>{presentationTextOne}</p>
      <p dangerouslySetInnerHTML={{ __html: presentationTextTwo }} />
    </TextContainer>
  );
}

export default Text;
