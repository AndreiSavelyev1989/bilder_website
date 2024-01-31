import React from "react";
import styled from "styled-components";
import { COLOR } from "../../assets/styles";
import { Button } from "../common/Button/Button";
import { forwardRef } from "react";
import { executeScroll } from "../../assets/helpers";
import { main } from "../../assets/images";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80vh;
  background-attachment: fixed;
  background-image: url(${main});
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

const Title = styled.h1`
  min-width: 200px;
  font-weight: 700;
  font-size: 76px;
  margin: 0;

  @media screen and (max-width: 1100px) {
    font-size: 60px;
  }

  @media screen and (max-width: 400px) {
    font-size: 50px;
  }
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

export const Main = ({ reference, setIsOpenModal })=> {
  return (
    <Container>
      <MainBlock>
        <TitleWrapper>
          <Title>Откройте дверь в свою новую квартиру</Title>
        </TitleWrapper>
        <ButtonsWrapper>
          <Button
            title={"Узнать больше"}
            width={"50%"}
            callback={() => executeScroll(reference.servicesRef)}
          />
          <Button
            title={"Получить консультацию"}
            margin={"0 0 0 20px"}
            width={"50%"}
            background={COLOR.grey100}
            callback={() => setIsOpenModal(true)}
          />
        </ButtonsWrapper>
      </MainBlock>
    </Container>
  );
};
