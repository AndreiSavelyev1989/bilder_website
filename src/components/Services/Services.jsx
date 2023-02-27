import React from "react";
import styled from "styled-components";
import { Service } from "../Service/Service";
import { services } from "./../../assets/mockData/index";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
`;

const Title = styled.h2`
  min-width: 300px;
  font-size: 40px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 95%;
  padding: 0 30px 0 30px;
  gap: 30px;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Services = () => {
  return (
    <Container>
      <Title>Наши услуги</Title>
      <Wrapper>
        {services.map((el) => (
          <Service
            key={el.id}
            title={el.title}
            services={el.services}
            photoSrc={el.src}
          />
        ))}
      </Wrapper>
    </Container>
  );
};