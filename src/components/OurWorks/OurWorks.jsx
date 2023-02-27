import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../common/Button/Button";
import { Slideshow } from "../Slideshow/Slideshow";
import { COLOR } from "../../assets/styles";
import { Modal } from "../Modal/Modal";
import { Galleries } from "../Galleries/Galleries";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  overflow-y: hidden;
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

export const OurWorks = ({ isOpenModal, setIsOpenModal }) => {
  const modalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

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
          callback={modalHandler}
        />
      </ButtonWrapper>
      {isOpenModal && (
        <Modal callback={modalHandler}>
          <Galleries />
        </Modal>
      )}
    </Container>
  );
};
