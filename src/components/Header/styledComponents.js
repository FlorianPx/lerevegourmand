import styled from "styled-components";
import themes from "../../themes";

export const HeaderContainer = styled.header`
  position: relative;
  left: 0;
  right: 0;
  margin-top: 30px;
  width: 90%;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
`;
export const LogoTitle = styled.h1`
  position: absolute;
  left: 0;
  right: 0;
  top: -41px;
  color: ${themes.title};
`;
export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  color: ${themes.yellow};
  list-style: none;
  padding-top: 1rem;
`;
export const NavbarItem = styled.li`
  cursor: pointer;
  padding: 0 0.5rem;
`;
export const Image = styled.img`
  width: 85%;
  border-radius: 30px;
  margin-bottom: 2rem;
`;
export const TextHeader = styled.p`
  position: absolute;
  top: 42%;
  color: white;
  font-family: "Futura";
  font-weight: 600;
  padding: 0 37%;
`;
export const PinkBlock = styled.div`
  background-color: ${themes.pink};
  width: ${themes.width};
  height: calc(2 * ${themes.width});
  border-radius: 30px;
`;
export const YellowBlock = styled.div`
  background-color: ${themes.yellow};
  width: 20rem;
  height: ${themes.width};
  border-radius: 30px;
`;
