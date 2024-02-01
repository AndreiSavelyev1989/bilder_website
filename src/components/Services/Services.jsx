import React, { forwardRef, memo } from "react";
import styled from "styled-components";
import { Service } from "../Service/Service";
import { services } from "./../../assets/mockData/index";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  min-height: 500px;
`;

const Title = styled.h2`
  min-width: 300px;
  font-size: 55px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
  }
`;

const RefBlock = styled.div`
  height: 20px;
  width: 100%;
`;

export const Services = memo(
  forwardRef((props, ref) => {
    return (
      <Container>
        <RefBlock ref={ref} />
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
  })
);
