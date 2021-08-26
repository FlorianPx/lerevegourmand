import styled from "styled-components";

import themes from "../../../themes";

export const ListContainer = styled.ul`
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  background-color: white;
  padding: 2.5rem;
  margin: 0;
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
