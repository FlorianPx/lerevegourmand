import styled from "styled-components";
import themes from "../../themes";
import { devices } from "../constants";

export const FoundMeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.article`
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgb(26 26 26 / 10%);
  background-color: white;
  padding: 1rem;

  @media screen and (min-width: ${devices.tablet}px) {
    margin: 0;
    width: 48%;
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
  object-fit: cover;

  &:hover {
    box-shadow: 0px 0px 18px rgba(26, 26, 26, 0.3);
  }
`;

export const TapLogo = styled.img`
  position: absolute;
  bottom: 8%;
  right: 10%;
  width: 1.8rem;
  backdrop-filter: blur(20px);
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
