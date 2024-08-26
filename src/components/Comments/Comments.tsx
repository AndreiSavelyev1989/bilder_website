import React, { memo, useEffect, useState } from "react";
import { Comment } from "../Comment/Comment";
import { Container, Title, Wrapper } from "./CommentsStyles";
import { CommentsAPI } from "../../api/api";
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

export const Comments = memo(() => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    requestComments();
  }, []);

  const requestComments = async () => {
    try {
      setIsLoading(true);
      const response = await CommentsAPI.getComments();
      setComments(response.data);
    } catch (err: any) {
      console.log({ err });
    } finally {
      setIsLoading(false);
    }
  };

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
