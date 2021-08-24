import styled from "styled-components";

import themes from "../../../themes";
import { devices } from "../../constants";

export const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    ". ."
    "press press";

  margin-bottom: 3rem;

  @media screen and (min-width: ${devices.tablet}px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "a b c";
    grid-auto-flow: row;
  }
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
  width: 100%;
`;
export const Item = styled.li`
  list-style: none;

  &:first-child {
    margin-right: 2rem;
  }
`;

export const Anchor = styled.a`
  color: ${themes.darkPink};
  padding: 0 1rem;
`;
export const ContactBlock = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
`;
export const SocialLogo = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const PhoneLogo = styled.img`
  margin-right: 1rem;
`;
export const BedenacLogo = styled.img`
  max-width: 15rem;
  margin-bottom: 0.5rem;
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PressBlock = styled(Block)`
  grid-area: press;
  @media screen and (min-width: ${devices.tablet}px) {
    grid-area: b;
  }
`;
