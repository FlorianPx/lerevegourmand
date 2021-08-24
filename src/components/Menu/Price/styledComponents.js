import styled from "styled-components";

import themes from "../../../themes";
import { devices } from "../../constants";

export const PriceContainer = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: ${devices.desktop}px) {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 18rem;
    margin: 0 auto;
    height: 100%;
  }
`;

export const Title = styled.h4`
  margin: 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 8rem;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  background-color: white;

  @media screen and (min-width: ${devices.desktop}px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${themes.darkYellow};
  font-weight: 600;
  font-size: 1.15rem;
  margin: 0;
  text-align: center;
  align-items: center;

  @media screen and (min-width: ${devices.mobile}px) {
    font-size: 1.2rem;
  }

  > span {
    margin: 0 10px;
  }

  @media screen and (min-width: ${devices.desktop}px) {
    font-size: 2rem;
    flex-direction: column;
  }
`;

export const Subtitle = styled.span`
  display: block;
  font-size: 0.7rem;

  @media screen and (min-width: ${devices.tablet}px) {
    font-size: 0.875rem;
  }
`;
