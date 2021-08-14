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
  width: 100%;
`;
export const Item = styled.li`
  list-style: none;
  width: 100%;
`;
export const Anchor = styled.a`
  color: ${themes.darkPink};
  padding: 0 1rem;
`;
export const ContactBlock = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
`;
export const SocialLogo = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const PhoneLogo = styled.img`
  margin-right: 1rem;
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
