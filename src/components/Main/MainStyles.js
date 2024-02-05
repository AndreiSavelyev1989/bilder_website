import styled from "styled-components";
import { COLOR } from "../../assets/styles";
import { main } from "../../assets/images";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 72vh;
  background-attachment: fixed;
  background-image: url(${main});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
`;

export const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 85%;
  background: ${COLOR.white};
  opacity: 0.9;
  gap: 40px;

  @media screen and (max-width: 900px) {
    width: 70%;
  }

  @media screen and (max-width: 700px) {
    width: 85%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const Title = styled.h1`
  min-width: 200px;
  font-weight: 700;
  font-size: 70px;
  margin: 0;

  @media screen and (max-width: 1100px) {
    font-size: 60px;
  }

  @media screen and (max-width: 400px) {
    font-size: 50px;
  }

  @media screen and (max-height: 500px) {
    font-size: 50px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 530px) {
    flex-direction: column;
    gap: 20px;
  }
`;
