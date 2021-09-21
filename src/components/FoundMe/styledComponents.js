import styled from "styled-components";
import themes from "../../themes";
import { devices } from "../constants";

export const FoundMeContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr;
  grid-row-gap: 0.5rem;

  @media screen and (min-width: ${devices.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0;
  }
`;
export const Card = styled.article`
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  background-color: white;
  padding: 1rem;
  list-style: none;
`;

export const Anchor = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 30px;
  margin-bottom: 0.5rem;

  &:hover {
    box-shadow: 0px 0px 18px rgba(26, 26, 26, 0.3);
  }
`;
export const TapLogo = styled.img`
  position: absolute;
  bottom: 10%;
  right: 6%;
  width: 1.8rem;
  backdrop-filter: blur(5px);
  border-radius: 0.5rem;
`;
export const Title = styled.h4`
  color: ${themes.darkYellow};
  margin: 0;
`;
export const Text = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;
