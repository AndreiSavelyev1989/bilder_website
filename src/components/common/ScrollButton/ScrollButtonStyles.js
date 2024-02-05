import { BiUpArrow } from "react-icons/bi";
import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

export const Arrow = styled(BiUpArrow)`
  width: 30px;
  height: 30px;
`;

export const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: ${COLOR.orange200};
  border: 3px solid ${COLOR.grey400};
  cursor: pointer;
  z-index: 11;

  &:hover {
    transition: 0.5s ease;
    border: 3px solid ${COLOR.grey200};
  }

  &:hover ${Arrow} {
    transition: 0.5s ease;
    color: ${COLOR.grey200};
    transform: scale(1.2);
  }
`;
