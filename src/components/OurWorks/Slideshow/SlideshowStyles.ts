import styled from "styled-components";
import { COLOR } from "@assets/styles/index";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export const Container = styled.div`
  width: 90%;
  height: 450px;

  @media screen and (max-width: 500px) {
    height: 400px;
  }

  @media screen and (max-height: 500px) {
    height: 350px;
  }
`;

export const Image = styled.div<{ $url: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
  background-image: ${({ $url }) => `url(${$url})`};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;

  @media screen and (max-width: 500px) {
    height: 400px;
  }
  @media screen and (max-height: 500px) {
    height: 350px;
  }
`;

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
`;
