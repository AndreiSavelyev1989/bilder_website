import React, { memo } from "react";
import { Comment } from "../Comment/Comment";
import { comments } from "../../assets/mockData";
import { Container, Title, Wrapper } from "./CommentsStyles";

export const Comments = memo(() => {
  return (
    <Container>
      <Title>Комментарии</Title>
      <Wrapper>
        {comments.map((el) => (
          <Comment key={el.id} data={el} />
        ))}
      </Wrapper>
    </Container>
  );
});
