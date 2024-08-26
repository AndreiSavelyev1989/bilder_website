import React, { memo } from "react";
import { Container, Image, ImageWrapper, Name, Text } from "./CommentStyles";

type Props = {
  data: {
    _id: string;
    email: string;
    text: string;
    user: {
      profile_image: string;
      username: string;
    };
  };
};
export const Comment = memo(({ data }: Props) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={data.user.profile_image} alt="avatar" />
        <Name>{data.user.username}</Name>
      </ImageWrapper>
      <Text>{data.text}</Text>
    </Container>
  );
});
