import { memo } from "react";
import { Slide } from "react-slideshow-image";
import { CommentSlider } from "../CommentSlider/CommentSlider";
import { ButtonWrapper, NextButton, PrevButton } from "./CommentsSliderStyles";

type Comment = {
  _id: string;
  email: string;
  text: string;
  user: {
    profile_image: string;
    username: string;
  };
};

type Props = {
  comments: Comment[];
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
        <CommentSlider key={el._id} data={el} index={index} />
      ))}
    </Slide>
  );
});
