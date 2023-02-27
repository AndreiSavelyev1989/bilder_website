import React from "react";
import styled, { keyframes } from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { COLOR } from "../../assets/styles";

const modalDisplay = keyframes`
    0% { width : 0; height: 0 }
    100% { width : 70%; height: 660px }
`;

const Container = styled.div`
  position: absolute;
  width: ${({ width }) => width || "80%"};
  height: ${({ height }) => height || "660px"};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background: ${COLOR.white};
  animation: 0.5s linear ${modalDisplay};
  z-index: 11;
`;

const Cross = styled(RxCross1)`
  width: 100%;
  height: 100%;
  color: ${COLOR.grey400};
`;

const CloseButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: -40px;
  width: 30px;
  height: 30px;
  border: transparent;
  border-radius: 50%;
  background: ${COLOR.white};
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }

  &:hover ${Cross} {
    color: ${COLOR.red};
    transition: 0.5s ease;
    transform: scale(1.2);
  }
`;

export const Modal = ({ callback, children }) => {
  return (
    <Container>
      <CloseButton onClick={callback}>
        <Cross />
      </CloseButton>
      {children}
    </Container>
  );
};
