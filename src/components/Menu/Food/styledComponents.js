import styled from "styled-components";

import themes from "../../../themes";

export const FoodContainer = styled.div`
  position: relative;
`;
export const ListContainer = styled.ul`
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  background-color: white;
  padding: 2rem 12rem 2rem 2rem;
  margin: 0;
`;
export const List = styled.li`
  list-style: none;
  margin-bottom: 1rem;
  max-width: 26rem;
`;
export const FoodPriceSection = styled.div`
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
  width: 54%;
  background-color: ${themes.lighterPink};
`;
