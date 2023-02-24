import React from "react";
import styled, { keyframes } from "styled-components";
import { COLOR } from "../../assets/styles";
import { Button } from "../common/Button/Button";

const lazyBlockDisplay = keyframes`
  0% { width: 0; }
 100% { width: 50%}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80vh;
  background-attachment: fixed;
  background-image: url("https://lp3-gr-apartments-repair-decoration.oml.ru/d/3890686/d/1512555.jpg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
`;

const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 85%;
  background: ${COLOR.white};
  opacity: 0.9;
  gap: 40px;
  animation: linear 1s ${lazyBlockDisplay};

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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Title = styled.h2`
  min-width: 200px;
  font-weight: 700;
  font-size: 40px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 530px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Main = () => {
  return (
    <Container>
      <MainBlock>
        <TitleWrapper>
          <Title>Откройте дверь в свою новую квартиру</Title>
        </TitleWrapper>
        <ButtonsWrapper>
          <Button title={"Узнать больше"} />
          <Button
            title={"Получить консультацию"}
            margin={"0 0 0 20px"}
            width={"250px"}
            background={COLOR.grey100}
          />
        </ButtonsWrapper>
      </MainBlock>
    </Container>
  );
};
