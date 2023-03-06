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
  width: ${({ width }) => width || "70%"};
  height: ${({ height }) => height || "585px"};
  margin-top: ${({ isModal }) => (isModal ? "0" : "40px")};
  border-radius: 10px;
  background: ${COLOR.white};

  @media screen and (max-width: 530px) {
    width: 330px;
  }

  @media screen and (max-width: 360px) {
    border: ${({ isModal }) =>
      isModal ? "none" : `1px solid ${COLOR.grey100}`};
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
  font-size: 32px;
`;

const ProcessingPersonalDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;

export const Form = ({ width, height, isModal, setIsOpenModal }) => {
  return (
    <Container width={width} height={height} isModal={isModal}>
      <Wrapper>
        <Title>Оставить заявку</Title>
        <Input label={"Имя"} />
        <Input label={"Телефон"} />
        <Input label={"E-Mail"} />
        <ProcessingPersonalDataWrapper>
          <Checkbox
            text={"Я согласен на обработку моих"}
            isRequired={true}
            isAgreeProcessingPersonalData={true}
            setIsOpenModal={setIsOpenModal}
          />
        </ProcessingPersonalDataWrapper>
        <ButtonWrapper>
          <Button title={"Отправить"} />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};
