import styled from "styled-components";
import themes from "../../themes";

export const HeaderContainer = styled.header`
  position: relative;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  margin: 2rem auto 10rem;
  text-align: center;
  width: 100%;
`;
export const LogoTitle = styled.h1`
  position: absolute;
  left: 0;
  right: 0;
  top: -41px;
  color: ${themes.pinkFont};
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
  margin: 0 auto 3rem;
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
  position: absolute;
  top: 8%;
  left: 5.5%;
  z-index: -1;
  background-color: ${themes.pinkBlock};
  width: calc(4 * ${themes.width});
  height: calc(18 * ${themes.width});
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(193, 37, 74, 0.3);
`;
export const YellowBlock = styled.div`
  position: absolute;
  bottom: 4%;
  right: 5.5%;
  z-index: -1;
  background-color: ${themes.yellowBlock};
  width: calc(10 * ${themes.width});
  height: calc(10 * ${themes.width});
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(207, 140, 23, 0.3);
`;
