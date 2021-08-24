import styled from "styled-components";

export const PresentationContainer = styled.div`
  position: relative;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  &:first-child {
    margin-bottom: 1rem;
  }
  background-color: white;
  height: 100%;
  padding: 1.5rem;
`;
