import styled from "styled-components";

import themes from "../../../themes";
import { devices } from "../../constants";

export const ListContainer = styled.ul`
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  background-color: white;
  padding: 1.5rem;
  margin: 0;
  height: 100%;

  @media screen and (min-width: ${devices.desktop}px) {
    padding: 2.5rem;
  }
`;
export const List = styled.li`
  list-style: none;
  margin-bottom: 1rem;
  max-width: 100%;

  &:last-child {
    margin-top: 3rem;
    margin-bottom: 0;
  }
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const Title = styled.h4`
  color: ${themes.darkPink};
  font-weight: 600;
  margin: 0;
`;
export const Price = styled.span`
  color: ${themes.darkPink};
  margin: 0;
`;
export const Text = styled.p`
  margin: 0;
`;
export const Block = styled.div`
  height: 2px;
  width: 100%;
  margin: 0 1rem 0 0.5rem;
  flex: 1;
  background-color: ${themes.lighterPink};
`;
export const FoodImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 16px;
  cursor: pointer;

  &:hover {
    -ms-transform: scale(3);
    -webkit-transform: scale(3);
    transform: scale(3);
  }

  @media screen and (min-width: ${devices.desktop}px) {
    width: 64px;
    height: 64px;
    border-radius: 32px;
  }
`;
export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TextWrapper = styled.div`
  width: 100%;
`;
