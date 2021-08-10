import styled from "styled-components";
import themes from "../../themes";

export const HeaderContainer = styled.header`
  position: relative;
  left: 0;
  right: 0;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  margin: 2rem 0 10rem;
  text-align: center;
`;
export const LogoTitle = styled.h1`
  position: absolute;
  left: 0;
  right: 0;
  top: -41px;
  color: ${themes.pinkFontTitle};
`;
export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  color: ${themes.yellowFont};
  list-style: none;
  padding: 2rem 0 0 0;
`;
export const NavbarItem = styled.li`
  cursor: pointer;
  padding: 0 0.5rem;
`;
export const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Image = styled.img`
  position: relative;
  max-width: 85%;
  border-radius: 30px;
  margin-bottom: 2rem;
`;
export const TextHeader = styled.h2`
  position: absolute;
  top: 45%;
  color: white;
  font-size: 2rem;
  font-family: "Futura";
  font-weight: 600;
  max-width: 24rem;
  margin: 0;
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
