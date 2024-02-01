import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-right: 10px;
  gap: 20px;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Text = styled.p`
  margin: 0;
`;

const Name = styled.span``;

export const Comment = ({ data }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={data.url} alt="avatar" />
        <Name>{data.name}</Name>
      </ImageWrapper>

      <Text>{data.caption}</Text>
    </Container>
  );
};
