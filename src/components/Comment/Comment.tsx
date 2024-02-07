import React, { memo } from "react";
import { Container, Image, ImageWrapper, Name, Text } from "./CommentStyles";

export const Comment = memo(({ data }: any) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={data.url} alt="avatar" />
        <Name>{data.name}</Name>
      </ImageWrapper>

      <Text>{data.caption}</Text>
    </Container>
  );
});
