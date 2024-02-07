import { memo } from "react";
import { Slide } from "react-slideshow-image";
import { CommentSlider } from "../CommentSlider/CommentSlider";
import { ButtonWrapper, NextButton, PrevButton } from "./CommentsSliderStyles";
import { SliderCommentType } from "../../assets/mockData";

type Props = {
  comments: SliderCommentType[];
};

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

export const CommentsSlider = memo(({ comments }: Props) => {
  return (
    <Slide {...properties} autoplay={false}>
      {comments.map((el, index) => (
        <CommentSlider key={el.id} data={el} index={index} />
      ))}
    </Slide>
  );
});
