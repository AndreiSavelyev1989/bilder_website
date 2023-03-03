import React, { forwardRef } from "react";
import styled from "styled-components";
import { Button } from "../common/Button/Button";
import { Slideshow } from "../Slideshow/Slideshow";
import { COLOR } from "../../assets/styles";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: hidden;
`;

const Title = styled.h2`
  min-width: 300px;
  font-size: 55px;
  text-align: center;
`;

const WorksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80%;
  margin-top: 30px;
`;

export const OurWorks = forwardRef((props, ref) => {
  const { isOpenModal, setIsOpenModal } = props;

  const modalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Container ref={ref}>
      <Title>Наши работы</Title>
      <WorksWrapper>
        <Slideshow />
      </WorksWrapper>
      <ButtonWrapper>
        <Button
          title={`Показать все работы `}
          height={"54px"}
          width={"350px"}
          isShowAll={true}
          background={COLOR.grey100}
          callback={modalHandler}
        />
      </ButtonWrapper>
    </Container>
  );
});
