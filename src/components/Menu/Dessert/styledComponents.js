import styled from "styled-components";

import { devices } from "../../constants";

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  margin-top: 2.5rem;
  z-index: 1;

  @media screen and (min-width: ${devices.desktop}px) {
    z-index: -1;
    margin-top: 0;
    margin-left: 8rem;
    width: 80%;
  }
`;
