import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { COLOR } from "../../../assets/styles";

const Cross = styled(RxCross1)`
  width: 100%;
  height: 100%;
  color: ${COLOR.grey400};
`;

const Button = styled.button`
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
  z-index: 13;

  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }

  &:hover ${Cross} {
    color: ${COLOR.red};
    transition: 0.5s ease;
    transform: scale(1.2);
  }

  @media screen and (max-width: 460px) {
    top: 10px;
    right: 10px;
  }
`;

export const CloseButton = ({ callback }) => {
  return (
    <Button onClick={callback}>
      <Cross />
    </Button>
  );
};
