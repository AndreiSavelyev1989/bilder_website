import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { COLOR } from "../../assets/styles";
import { comments } from "../../assets/mockData";
import { Comment } from "../Comment/Comment";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 500px;
  @media screen and (max-width: 770px) {
    height: 900px;
  }
`;

const Title = styled.h2`
  width: 100%;
  margin: 60px 0 0 0;
  text-align: center;
  font-size: 55px;
`;

const SlideWrapper = styled.div`
  width: 90%;
  margin-top: 40px;
`;

const PrevButton = styled(BiLeftArrow)`
  width: 30px;
  height: 30px;
  color: ${COLOR.grey400};
`;

const NextButton = styled(BiRightArrow)`
  width: 30px;
  height: 30px;
  color: ${COLOR.grey400};
`;

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${COLOR.orange200};
  border-radius: 5px;
  border: transparent;
  margin: 0 20px 0 20px;

  &:hover ${PrevButton}, &:hover ${NextButton} {
    color: ${COLOR.grey200};
    transition: 0.5s ease;
    transform: scale(1.2);
  }

  @media screen and (max-width: 360px) {
    display: none;
  }
`;

const properties = {
  prevArrow: (
    <ButtonWrapper>
      <PrevButton />
    </ButtonWrapper>
  ),
  nextArrow: (
    <ButtonWrapper>
      <NextButton />
    </ButtonWrapper>
  ),
};

export const Comments = () => {
  return (
    <Container>
      <Title>Отзывы наших клиентов</Title>
      <SlideWrapper>
        <Slide {...properties} autoplay={false}>
          {comments.map((el, index) => (
            <Comment data={el} index={index} />
          ))}
        </Slide>
      </SlideWrapper>
    </Container>
  );
};
