import React, { memo } from "react";
import { Slide } from "react-slideshow-image";
import { CommentSlider } from "../CommentSlider/CommentSlider";
import { ButtonWrapper, NextButton, PrevButton } from "./CommentsSliderStyles";

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

export const CommentsSlider = memo(({ comments }) => {
  return (
    <Slide {...properties} autoplay={false}>
      {comments.map((el, index) => (
        <CommentSlider key={el.id} data={el} index={index} />
      ))}
    </Slide>
  );
});
