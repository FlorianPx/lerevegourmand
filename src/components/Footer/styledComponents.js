import styled from "styled-components";
import themes from "../../themes";
import { devices } from "../constants";

export const FooterContainer = styled.footer`
  background-color: ${themes.lighterYellow};
  padding: 1rem 0 2rem;

  @media screen and (min-width: ${devices.tablet}px) {
    padding: 2rem 0;
  }
`;

export const FooterTitle = styled.h4`
  color: ${themes.darkerYellow};
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem;
`;
export const FooterText = styled.p`
  color: ${themes.darkerYellow};
  margin: 0;
  width: 100%;
`;
