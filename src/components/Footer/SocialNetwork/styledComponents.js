import styled from "styled-components";
import themes from "../../../themes";

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
`;
export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
`;
export const Item = styled.li`
  list-style: none;
`;
export const Anchor = styled.a`
  color: ${themes.pinkFont};
  padding: 0 1rem;
`;
export const SocialLogo = styled.img`
  width: 25%;
`;
export const BedenacLogo = styled.img`
  width: 65%;
  margin-bottom: 0.5rem;
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 20%;
`;
