import styled from "styled-components";
import themes from "../../themes";

export const FoundMeContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
`;
export const Card = styled.div`
  text-align: start;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  &:first-child {
    margin-bottom: 1rem;
  }
  background-color: white;
  padding: 1rem;
  list-style: none;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 30px;
`;
export const Title = styled.h4`
  color: ${themes.yellowFont};
  margin-bottom: 0;
`;
export const Text = styled.p`
  margin: 0;
`;
