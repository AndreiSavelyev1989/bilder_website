import React from "react";
import styled from "styled-components";
import { Button } from "../common/Button/Button";
import { Slideshow } from "../Slideshow/Slideshow";
import { VscRunAll } from "react-icons/vsc";
import { COLOR } from "../../assets/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
`;

const Title = styled.h2`
  min-width: 300px;
  font-size: 40px;
  text-align: center;
`;

const WorksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  min-height: 600px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;

export const Gallery = () => {
  return (
    <Container>
      <Title>Наши работы</Title>
      <WorksWrapper>
        <Slideshow />
      </WorksWrapper>
      <ButtonWrapper>
        <Button
          title={`Показать все работы `}
          width={"350px"}
          isShowAll={true}
          background={COLOR.grey100}
        />
      </ButtonWrapper>
    </Container>
  );
};
