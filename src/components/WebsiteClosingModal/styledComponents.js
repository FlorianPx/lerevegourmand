import styled from "styled-components";
import themes from "../../themes";

export const Text = styled.p`
  color: black;
  text-align: justify;
`;

export const Span = styled.span`
  color: ${themes.darkPink};
  font-weight: bold;
`;

export const LogoCake = styled.img`
  width: 16px;
  margin-left: 8px;
`;

export const Wrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
