import React from "react";
import { BiUpArrow } from "react-icons/bi";
import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

const Arrow = styled(BiUpArrow)`
  width: 30px;
  height: 30px;
`;

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background: ${COLOR.orange200};
  cursor: pointer;

  &:hover ${Arrow} {
    transition: 0.5s ease;
    color: ${COLOR.grey200};
    transform: scale(1.2);
  }
`;

export const ScrollButton = ({ callback }) => {
  return (
    <Button onClick={callback}>
      <Arrow />
    </Button>
  );
};
