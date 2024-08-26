import { memo } from "react";
import { Comment } from "../Comment/Comment";
import { Container, Title, Wrapper } from "./CommentsStyles";
import { createPortal } from "react-dom";
import { Loader } from "../common/Loader/Loader";

type CommentType = {
  _id: string;
  email: string;
  text: string;
  user: {
    profile_image: string;
    username: string;
  };
};

type Props = {
  comments: CommentType[];
  isLoading: boolean;
};

export const Comments = memo(({ comments, isLoading }: Props) => {
  return (
    <Container>
      <Title>Комментарии</Title>
      <Wrapper>
        {comments.map((el: CommentType) => (
          <Comment key={el._id} data={el} />
        ))}
      </Wrapper>
      {createPortal(isLoading && <Loader />, document.body)}
    </Container>
  );
});
