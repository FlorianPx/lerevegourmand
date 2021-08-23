import styled from "styled-components";
import { devices } from "../constants";

export const InformationContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 0;
  grid-row-gap: 10rem;
  margin: 2rem 0 10rem;

  @media screen and (min-width: ${devices.desktop}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 2.5rem;
    grid-row-gap: 0;
  }
`;
