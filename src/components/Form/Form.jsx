import React from "react";
import styled from "styled-components";
import { COLOR } from "../../assets/styles";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import { Checkbox } from "./../common/Checkbox/Checkbox";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  width: 70%;
  height: 585px;
  margin-top: 40px;
  border-radius: 10px;
  background: ${COLOR.white};

  @media screen and (max-width: 530px) {
    width: 330px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  width: 90%;
`;

const Title = styled.h2`
  margin: 20px 0 0 0;
  font-size: 30px;
`;

const ProcessingPersonalDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProcessingPersonalData = styled.span`
  margin-left: 30px;
  color: ${COLOR.orange50};
  text-decoration: underline;
  text-decoration-color: ${COLOR.orange50};
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;

export const Form = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Оставить заявку</Title>
        <Input label={"Имя"} />
        <Input label={"Телефон"} />
        <Input label={"E-Mail"} />
        <ProcessingPersonalDataWrapper>
          <Checkbox text={"Я согласен на обработку моих"} isRequired={true} />
          <ProcessingPersonalData>персональных данных</ProcessingPersonalData>
        </ProcessingPersonalDataWrapper>
        <ButtonWrapper>
          <Button title={"Отправить"} />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};
