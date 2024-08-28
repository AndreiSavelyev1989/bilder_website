import { ForwardedRef } from "react";
import styled from "styled-components";
import { FaRegPenToSquare } from "react-icons/fa6";
import { COLOR } from "@assets/styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  @media screen and (max-width: 770px) {
    min-height: 900px;
  }
`;

export const Title = styled.h2`
  width: 100%;
  margin: 40px 0 0 0;
  text-align: center;
  font-size: 55px;
`;

export const SlideWrapper = styled.div`
  width: 90%;
  margin-top: 40px;
`;

export const RefBlock = styled.div<{ ref: ForwardedRef<unknown> }>`
  height: 20px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  width: 80%;
  @media screen and (max-width: 530px){
    margin-top: 20px;
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  top: -25px;
  right: 0;
  text-align: center;
  align-content: center;
  width: 100px;
  height: 20px;
  font-size: 12px;
  background: ${COLOR.orange200};
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s ease-out;
`;

export const CreateCommentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  height: 40px;
`;

export const CreateCommentButtonWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;
export const CreateCommentButton = styled(FaRegPenToSquare)`
  position: relative;
  width: 40px;
  height: 40px;
  transition: 0.5s ease-out;
  cursor: pointer;

  &:hover {
    color: ${COLOR.grey200};
    transform: scale(1.2);
  }
`;
