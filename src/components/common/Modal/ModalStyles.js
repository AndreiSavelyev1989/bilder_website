import styled, { keyframes } from "styled-components";
import { COLOR } from "../../../assets/styles";

const modalDisplay = keyframes`
    0% { opacity : 0;}
    100% { opacity : 1; }
`;

const modalContentDisplay = keyframes`
    0% { transform : scale(0.5);}
    100% { transform : scale(1); }
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
  animation: 0.5s linear ${modalDisplay};
  z-index: 100;
  color: ${COLOR.grey400};
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  width: ${({ width }) => width || "80%"};
  height: ${({ height }) => height || "95%"};
  border-radius: 10px;
  background: ${COLOR.white};
  animation: 0.3s linear ${modalContentDisplay};

  @media screen and (max-width: 900px) {
    width: ${({ isShowPersonalData }) => (isShowPersonalData ? "90%" : "65%")};
  }

  @media screen and (max-width: 490px) {
    width: 95%;
  }
`;
