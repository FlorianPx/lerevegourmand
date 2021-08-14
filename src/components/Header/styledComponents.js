import styled from "styled-components";
import themes from "../../themes";

export const HeaderContainer = styled.header`
  position: relative;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  margin: 2rem 0 10rem;
  padding-bottom: 4rem;
  text-align: center;
  width: 100%;
`;
export const LogoTitle = styled.h1`
  position: absolute;
  left: 0;
  right: 0;
  top: -41px;
  color: ${themes.darkPink};
`;
export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  color: ${themes.darkYellow};
  list-style: none;
  padding: 2rem 0 0 0;
`;
export const NavbarItem = styled.li`
  cursor: pointer;
  padding: 0 0.5rem;
  text-transform: uppercase;
`;
export const NavbarLink = styled.a`
  color: ${themes.darkYellow};
  text-decoration: none;
`;
export const PictureContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 7rem;
`;
export const Image = styled.img`
  position: relative;
  border-radius: 30px;
  width: 100%;
`;
export const TextHeader = styled.h2`
  position: absolute;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  max-width: 24rem;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
`;
export const PinkBlock = styled.div`
  position: absolute;
  top: -6%;
  left: -3%;
  z-index: -1;
  background-color: ${themes.pink};
  width: 16%;
  height: 72%;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(193, 37, 74, 0.3);
`;
export const YellowBlock = styled.div`
  position: absolute;
  bottom: -6%;
  right: -3%;
  z-index: -1;
  background-color: ${themes.yellow};
  width: 40%;
  height: 40%;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(207, 140, 23, 0.3);
`;
