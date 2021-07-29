import React from "react";

import { TitleBlockContainer, Title, Image } from "./styledComponents";

function TitleBlock({ defaultTheme }) {
  const { titleBlock, logoBlock, themeColor, horizontalLocation } =
    defaultTheme;

  return (
    <TitleBlockContainer
      themeColor={themeColor}
      horizontalLocation={horizontalLocation}
    >
      <Title themeColor={themeColor}>{titleBlock}</Title>
      {logoBlock ? <Image src={logoBlock} alt={titleBlock} /> : null}
    </TitleBlockContainer>
  );
}

export default TitleBlock;
