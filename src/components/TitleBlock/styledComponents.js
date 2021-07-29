import styled from "styled-components";

import themes from "../../themes/";

export const TitleBlockContainer = styled.div`
  position: absolute;
  top: -3.5rem;
  ${(props) => (props.horizontalLocation === "left" ? "left: 0" : "right: 0")};
  z-index: -1;
  display: flex;
  background-color: ${(props) =>
    props.themeColor === "pink" ? themes.lightPink : themes.lightYellow};
  border-radius: 30px;
  padding: 1rem 2rem 4rem;
`;
export const Title = styled.h3`
  color: ${(props) =>
    props.themeColor === "pink" ? themes.pinkFontTitle : themes.yellowFont};
  margin: 0 0.6rem 0 0;
`;
export const Image = styled.img`
  width: 1.5rem;
`;
