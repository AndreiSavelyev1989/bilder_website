import React from "react";
import styled from "styled-components";
import { COLOR } from "../../assets/styles";
import { Button } from "../common/Button/Button";

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
  width: 40%;
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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Title = styled.span`
  min-width: 200px;
  font-weight: 700;
  font-size: 45px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
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
