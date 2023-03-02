import React from "react";
import styled from "styled-components";
import { COLOR } from "../../assets/styles";
import { Form } from "../Form/Form";
import { OrderDetail } from "../OrderDetail/OrderDetail";

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 90%;
  margin-top: 33px;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

const DetailsWrapper = styled.div`
  width: 50%;
  height: 100%;
  background: ${COLOR.white};

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 665px;
  background: ${COLOR.orange100};

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 45px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
`;

export const Order = () => {
  return (
    <Container>
      <DetailsWrapper>
        <Title>Закажите смету объекта прямо сейчас</Title>
        <Details>
          <OrderDetail title={"Впишите имя и номер телефона в форму"} />
          <OrderDetail
            title={"Мы связываемся с вами, чтобы обсудить условия"}
          />
          <OrderDetail
            title={"Специалист замеряет все данные и составляет смету"}
          />
          <OrderDetail
            title={"Вы подписываете договор - а мы берёмся за дело!"}
          />
        </Details>
      </DetailsWrapper>
      <FormWrapper>
        <Form />
      </FormWrapper>
    </Container>
  );
};
