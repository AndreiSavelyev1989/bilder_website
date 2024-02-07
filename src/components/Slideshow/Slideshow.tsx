import React, { memo } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { galleries } from "../../assets/mockData";
import {
  ButtonWrapper,
  Container,
  Image,
  NextButton,
  PrevButton,
} from "./SlideshowStyles";

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

export const Slideshow = memo(() => {
  return (
    <Container>
      <Slide {...properties}>
        {galleries.works.map((slideImage, index) => (
          <Image key={index} $url={slideImage.url} />
        ))}
      </Slide>
    </Container>
  );
});
