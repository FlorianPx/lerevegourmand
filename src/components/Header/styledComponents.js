import styled from "styled-components";

const theme = {
  width: "1em",
  title: "#c1254a",
  pink: "#de5475",
  yellow: "#cf8c17",
};

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
  color: ${theme.title};
`;
export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  color: ${theme.yellow};
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
export const PinkBlock = styled.div`
  background-color: ${theme.pink};
  width: ${theme.width};
  height: calc(2 * ${theme.width});
  border-radius: 30px;
`;
export const YellowBlock = styled.div`
  background-color: ${theme.yellow};
  width: 20rem;
  height: ${theme.width};
  border-radius: 30px;
`;
