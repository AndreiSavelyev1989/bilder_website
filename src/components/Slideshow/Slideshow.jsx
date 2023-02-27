import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import { galleries } from "../../assets/mockData";
import { COLOR } from "./../../assets/styles/index";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Container = styled.div`
  width: 100%;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  background-image: ${({ url }) => `url(${url})`};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${COLOR.orange200};
  border-radius: 5px;
  border: transparent;
  margin: 0 20px 0 20px;
`;

const PrevButton = styled(BiLeftArrow)`
  width: 30px;
  height: 30px;
  color: ${COLOR.grey400};

  &:hover {
    color: ${COLOR.grey200};
    transition: 0.5s ease;
    transform: scale(1.2);
  }
`;

const NextButton = styled(BiRightArrow)`
  width: 30px;
  height: 30px;
  color: ${COLOR.grey400};

  &:hover {
    color: ${COLOR.grey200};
    transition: 0.5s ease;
    transform: scale(1.2);
  }
`;

const properties = {
  prevArrow: (
    <Button>
      <PrevButton />
    </Button>
  ),
  nextArrow: (
    <Button>
      <NextButton />
    </Button>
  ),
};

export const Slideshow = () => {
  return (
    <Container>
      <Slide {...properties}>
        {galleries.works.map((slideImage, index) => (
          <div key={index}>
            <Image url={slideImage.url} />
          </div>
        ))}
      </Slide>
    </Container>
  );
};
