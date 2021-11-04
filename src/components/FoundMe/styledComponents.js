import styled from "styled-components";
import themes from "../../themes";
import { devices } from "../constants";

export const FoundMeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${devices.tablet}px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const Card = styled.article`
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgb(26 26 26 / 10%);
  background-color: white;
  padding: 1rem;
  list-style: none;
  margin-bottom: 1rem;

  @media screen and (min-width: ${devices.tablet}px) {
    margin-left: 1rem;
    margin-bottom: 0;
    max-width: 50%;
  }
`;

export const Anchor = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  height: 12rem;

  @media screen and (min-width: ${devices.tablet}px) {
    height: 10rem;
  }
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
