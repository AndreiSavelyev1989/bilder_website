import React, { memo } from "react";
import {
  AuthorWrapper,
  CommentWrapper,
  Container,
  Image,
  ImageWrapper,
  Name,
  RaitingWrapper,
  Text,
  Title,
  Wrapper,
} from "./CommentStyles";
import { CommentType } from "../../assets/types/types";
import { Rating } from "../common/Rating/Rating";
import { dateFormat } from "../../assets/helpers";

type Props = {
  data: CommentType;
};

export const Comment = memo(({ data }: Props) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={data.user.profile_image} alt="avatar" />
      </ImageWrapper>
      <CommentWrapper>
        <AuthorWrapper>
          <Wrapper>
            <Title>Автор:</Title>
            <Name>{data.user.username}</Name>
          </Wrapper>
          <RaitingWrapper>
            <Rating initialRating={data.rating} disabled/>
          </RaitingWrapper>
        </AuthorWrapper>
        <Wrapper>
          <Title>Дата публикации:</Title>
          <Name>{dateFormat(data.createdAt)}</Name>
        </Wrapper>
        <Wrapper>
          <Title>Комментарий:</Title>
        </Wrapper>
        <Text>{data.text}</Text>
      </CommentWrapper>
    </Container>
  );
});
