import styled, { keyframes } from "styled-components";
import { COLOR } from "../../../assets/styles";

const rotate = keyframes`
    0% { transform : rotate(0deg)}
    100% { transform : rotate(360deg)}
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  color: ${COLOR.grey400};
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  border: 4px dashed ${COLOR.orange200};
  animation: infinite 3s linear ${rotate};
`;
