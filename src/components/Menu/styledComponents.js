import styled from "styled-components";
import { devices } from "../constants";

export const MenuContainer = styled.section`
  position: relative;
  display: block;
  margin: 2rem 0 10rem;

  @media screen and (min-width: ${devices.desktop}px) {
    display: flex;
    justify-content: center;
  }
`;
