import React from "react";

import { TitleBlockContainer, Title, Image } from "./styledComponents";

function TitleBlock({ defaultTheme }) {
  const { titleBlock, logoBlock, themeColor } = defaultTheme;

  return (
    <TitleBlockContainer themeColor={themeColor}>
      <Title themeColor={themeColor}>{titleBlock.toUpperCase()}</Title>
      <Image src={logoBlock} alt={titleBlock} />
    </TitleBlockContainer>
  );
}

export default TitleBlock;
