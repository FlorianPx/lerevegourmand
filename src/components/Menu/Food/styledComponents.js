import styled from "styled-components";

import themes from "../../../themes";

export const FoodContainer = styled.div`
  position: relative;
`;
export const ListContainer = styled.ul`
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  background-color: white;
  padding: 1rem 10rem 1rem 1rem;
`;
export const List = styled.li`
  list-style: none;
  margin-bottom: 1rem;
`;
export const FoodPriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const Title = styled.h4`
  color: ${themes.pinkFont};
  margin: 0;
`;
export const Price = styled.span`
  color: ${themes.pinkFont};
  margin: 0;
`;
export const Text = styled.p`
  margin: 0;
`;
export const Block = styled.div`
  height: 2px;
  width: 70%;
  background-color: ${themes.lightPink};
`;
