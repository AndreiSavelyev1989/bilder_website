import React from "react";
import styled, { keyframes } from "styled-components";
import { COLOR } from "../../assets/styles";

const displayNotification = keyframes`
    0% { left: -310px;}
    100% { left : 10px; }
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 10px;
  left: 10px;
  min-width: 200px;
  max-width: 300px;
  min-height: 54px;
  font-size: 18px;
  padding: 0 10px;
  background: ${COLOR.white};
  border: 2px solid ${COLOR.orange200};
  border: ${({ isError, isSuccess }) =>
    `2px solid ${
      isSuccess ? COLOR.green : isError ? COLOR.red : COLOR.orange200
    }`};
  color: ${({ isError, isSuccess }) =>
    isSuccess ? COLOR.green : isError ? COLOR.red : COLOR.grey200};
  border-radius: 5px;
  animation: 0.5s linear ${displayNotification};
  transition: 0.5s all ease;
  z-index: 101;
`;

export const Notification = ({ message, isSuccess, isError }) => {
  return (
    <Container isSuccess={isSuccess} isError={isError}>
      {message}
    </Container>
  );
};
