import styled from "styled-components";

import themes from "../../themes";
import { devices } from "../constants";

export const HeaderContainer = styled.header`
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  margin: 2rem 0 8rem;
  padding-bottom: 1.5rem;
  text-align: center;
  width: 100%;

  @media screen and (min-width: ${devices.tablet}px) {
    margin: 4rem 0 10rem;
    padding-bottom: 4rem;
    border-radius: 30px;
  }
`;

export const LogoTitle = styled.h1`
  position: absolute;
  left: 0;
  right: 0;
  top: -30px;
  font-size: 1.5rem;
  color: ${themes.darkPink};
  line-height: 32px;

  @media screen and (min-width: ${devices.tablet}px) {
    top: -40px;
    font-size: 2.5rem;
  }
`;
export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  color: ${themes.darkYellow};
  list-style: none;
  padding: 2rem 0 0 0;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;

  @media screen and (min-width: ${devices.mobile}px) {
    font-size: 1rem;
  }
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
  width: calc(100% - 3rem);
  margin: 0 auto;

  @media screen and (min-width: ${devices.tablet}px) {
    width: calc(100% - 10rem);
  }
`;
export const Image = styled.img`
  position: relative;
  border-radius: 15px;
  width: 100%;
  height: 150px;
  object-fit: cover;

  @media screen and (min-width: ${devices.tablet}px) {
    border-radius: 30px;
    height: 100%;
  }
`;
export const TextHeader = styled.h2`
  position: absolute;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  max-width: 15rem;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;

  @media screen and (min-width: ${devices.tablet}px) {
    font-size: 1.6rem;
    max-width: 24rem;
  }

  @media screen and (min-width: ${devices.desktop}px) {
    font-size: 2rem;
  }
`;
export const PinkBlock = styled.div`
  position: absolute;
  top: -6%;
  left: -3%;
  z-index: -1;
  background-color: ${themes.pink};
  width: 16%;
  height: 72%;
  border-radius: 15px;
  box-shadow: 0px 0px 30px rgba(193, 37, 74, 0.3);

  @media screen and (min-width: ${devices.tablet}px) {
    border-radius: 30px;
  }
`;
export const YellowBlock = styled.div`
  position: absolute;
  bottom: -6%;
  right: -3%;
  z-index: -1;
  background-color: ${themes.yellow};
  width: 40%;
  height: 40%;
  border-radius: 15px;
  box-shadow: 0px 0px 30px rgba(207, 140, 23, 0.3);

  @media screen and (min-width: ${devices.tablet}px) {
    border-radius: 30px;
  }
`;
