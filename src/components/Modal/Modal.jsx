import React from "react";
import styled, { keyframes } from "styled-components";
import { COLOR } from "../../assets/styles";
import { CloseButton } from "./../common/CloseButton/CloseButton";

const modalDisplay = keyframes`
    0% { width : 0; height: 0 }
    100% { width : 70%; height: 660px }
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "80%"};
  height: ${({ height }) => height || "700px"};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background: ${COLOR.white};
  animation: 0.3s linear ${modalDisplay};
  z-index: 11;

  @media screen and (max-width: 460px) {
    width: 95%;
  }
`;

export const Modal = ({ callback, children }) => {
  return (
    <Container>
      <CloseButton callback={callback} />
      {children}
    </Container>
  );
};
