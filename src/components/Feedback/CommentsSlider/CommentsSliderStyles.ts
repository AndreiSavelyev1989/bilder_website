import styled from "styled-components";
import { COLOR } from "../../../assets/styles";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export const PrevButton = styled(BiLeftArrow)`
  width: 30px;
  height: 30px;
  color: ${COLOR.grey400};
`;

export const NextButton = styled(BiRightArrow)`
  width: 30px;
  height: 30px;
  color: ${COLOR.grey400};
`;

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${COLOR.orange200};
  border-radius: 5px;
  border: transparent;
  margin: 0 20px 0 20px;

  &:hover ${PrevButton}, &:hover ${NextButton} {
    color: ${COLOR.grey200};
    transition: 0.5s ease;
    transform: scale(1.2);
  }

  @media screen and (max-width: 360px) {
    display: none;
  }
`;
