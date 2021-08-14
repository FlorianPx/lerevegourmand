import styled from "styled-components";

import themes from "../../themes";

export const PastriesContainer = styled.section`
  position: relative;
  width: 60%;
  margin: 2rem auto 10rem;
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  background-color: white;
}
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0;
  padding: 2.5rem;
`;
export const Image = styled.img`
  width: 40%;
`;
export const Button = styled.button`
  position: absolute;
  bottom: -1rem;
  right: 0;
  height: 2.5rem;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(26, 26, 26, 0.1);
  color: white;
  background-color: ${themes.darkPink};
  padding: 0 3rem;
  cursor: pointer;
`;
