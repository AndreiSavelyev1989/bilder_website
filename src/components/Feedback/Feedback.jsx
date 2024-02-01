import React, { forwardRef, memo } from "react";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { COLOR } from "../../assets/styles";
import { comments } from "../../assets/mockData";
import { Button } from "../common/Button/Button";
import { createPortal } from "react-dom";
import { CommentsSlider } from "../CommentsSlider/CommentsSlider";
import { useCommentsModal } from "../../hooks";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  @media screen and (max-width: 770px) {
    height: 900px;
  }
`;

const Title = styled.h2`
  width: 100%;
  margin: 40px 0 0 0;
  text-align: center;
  font-size: 55px;
`;

const SlideWrapper = styled.div`
  width: 90%;
  margin-top: 40px;
`;

const RefBlock = styled.div`
  height: 20px;
  width: 100%;
`;

export const Feedback = memo(
  forwardRef((props, ref) => {
    const { displayModal, setIsOpen } = useCommentsModal();

    const modalHandler = () => {
      setIsOpen(true);
    };

    return (
      <Container>
        <RefBlock ref={ref} />
        <Title>Отзывы наших клиентов</Title>
        <SlideWrapper>
          <CommentsSlider comments={comments} />
        </SlideWrapper>
        <Button
          title="Показать все отзывы"
          width="350px"
          hoverBackground={COLOR.grey200}
          background={COLOR.grey100}
          margin="0 0 40px 0"
          isShowAll
          callback={modalHandler}
        />
        {createPortal(displayModal(), document.body)}
      </Container>
    );
  })
);
