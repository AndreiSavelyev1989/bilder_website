import React, { memo } from "react";
import { Comment } from "../Comment/Comment";
import { comments } from "../../assets/mockData";
import styled from "styled-components";
import { COLOR } from "../../assets/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
  overflow-y: auto;
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${COLOR.grey100};
    border-radius: 10px;
  }
`;

const Title = styled.h3`
  margin: 0 0 20px 0;
  font-size: 30px;
`

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
