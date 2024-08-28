import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: ${COLOR.grey400};
  z-index: 1000;
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 1280px;
  max-height: 600px;

  @media screen and (max-width: 1300px) {
    width: 75%;
  }

  @media screen and (max-width: 750px) {
    height: 50%;
  }

  @media screen and (max-height: 500px) {
    max-height: 450px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: cover;

  @media screen and (max-height: 500px) {
    max-height: 450px;
  }
`;
