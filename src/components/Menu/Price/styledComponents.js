import styled from "styled-components";

import themes from "../../../themes";

export const PriceContainer = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  z-index: 1;
  width: 18rem;
  margin: 0 auto;
`;
export const Title = styled.h4`
  color: ${themes.darkYellow};
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  background-color: white;
  height: 20rem;
`;
