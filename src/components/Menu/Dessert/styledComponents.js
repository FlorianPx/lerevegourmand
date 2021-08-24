import styled from "styled-components";

import themes from "../../../themes";
import { devices } from "../../constants";

export const DessertContainer = styled.div`
  position: relative;
  margin-top: 2.5rem;
  z-index: 1;

  @media screen and (min-width: ${devices.desktop}px) {
    margin-top: 0;
    z-index: -1;
    margin-left: 8rem;
    width: 80%;
  }
`;
export const ListContainer = styled.ul`
  height: 100%;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  background-color: white;
  padding: 2.5rem;
  margin: 0;
`;
export const List = styled.li`
  list-style: none;
  margin-bottom: 1rem;

  &:last-child {
    margin-top: 3rem;
    margin-bottom: 0;
  }
`;
export const Title = styled.h4`
  color: ${themes.darkPink};
  font-weight: 600;
  margin: 0;
`;
export const Text = styled.p`
  margin: 0;
`;
