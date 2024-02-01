import React, { forwardRef, memo } from "react";
import styled from "styled-components";
import { Button } from "../common/Button/Button";
import { Slideshow } from "../Slideshow/Slideshow";
import { COLOR } from "../../assets/styles";
import { createPortal } from "react-dom";
import { useGalleryModal } from "../../hooks";

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

const RefBlock = styled.div`
  height: 20px;
  width: 100%;
`;

export const OurWorks = memo(
  forwardRef((props, ref) => {
    const { displayModal, setIsOpen } = useGalleryModal();

    const modalHandler = () => {
      setIsOpen(true);
    };

    return (
      <Container>
        <RefBlock ref={ref} />
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
        {createPortal(displayModal(), document.body)}
      </Container>
    );
  })
);
