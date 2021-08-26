import styled from "styled-components";

import { devices } from "../../constants";

export const PaymentContainer = styled.div`
  text-align: center;
`;
export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Image = styled.img`
  height: 32px;
  width: 32px;
  margin: 0 0.5rem 0;

  @media screen and (min-width: ${devices.tablet}px) {
    height: 46px;
    width: 46px;
  }
`;
