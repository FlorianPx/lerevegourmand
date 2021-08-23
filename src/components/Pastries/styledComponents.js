import styled from "styled-components";

import themes from "../../themes";
import { devices } from "../constants";

export const PastriesContainer = styled.section`
  position: relative;
  margin: 2rem auto 10rem;

  @media screen and (min-width: ${devices.desktop}px) {
    width: 60%;
  }
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  background-color: white;
  padding: 2rem 2rem 2.5rem;

  @media screen and (min-width: ${devices.tablet}px) {
    flex-direction: row;
    padding: 1rem 1rem 1.5rem;
  }
}
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  margin: 0;

  @media screen and (min-width: ${devices.tablet}px) {
    width: 60%;
  }
`;
export const Image = styled.img`
  width: 100%;

  @media screen and (min-width: ${devices.tablet}px) {
    width: 40%;
    height: 100%;
  }
`;
export const Button = styled.button`
  position: absolute;
  bottom: -1rem;
  right: 0;
  height: 2.5rem;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  color: white;
  background-color: ${themes.darkPink};
  padding: 0 3rem;
  cursor: pointer;
`;
