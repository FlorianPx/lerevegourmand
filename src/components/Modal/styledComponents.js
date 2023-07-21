import styled from "styled-components";
import themes from "../../themes";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

export const Section = styled.div`
  position: relative;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${themes.white};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  margin: 1.5rem;
  padding: 24px;
`;

export const Title = styled.h2`
  text-align: center;
  font-family: "Playfair Display";
  color: ${themes.darkYellow};
`;

export const Wrapper = styled.div`
  color: ${themes.darkYellow};
  text-align: center;
  max-height: 30rem;
  overflow-y: auto;
`;

export const CloseIcone = styled.button`
  width: 20px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
`;
