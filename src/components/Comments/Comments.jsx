import React, { memo } from "react";
import { Comment } from "../Comment/Comment";
import { comments } from "../../assets/mockData";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
`;

export const Comments = memo(() => {
  return (
    <Container>
      {comments.map((el) => (
        <Comment key={el.id} />
      ))}
    </Container>
  );
});
