import React from "react";
import styled from "styled-components";
import { COLOR } from "../../assets/styles";
import { CloseButton } from "../common/CloseButton/CloseButton";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: ${COLOR.grey400};
  z-index: 12;
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 1280px;
  height: 700px;

  @media screen and (max-width: 1300px) {
    width: 75%;
  }

  @media screen and (max-width: 750px) {
    height: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImagePreview = ({ setIsImagePreview, imagePreviewUrl }) => {
  const onCloseClickHandler = () => {
    setIsImagePreview(false);
  };

  return (
    <Container>
      <ImageWrapper>
        <CloseButton callback={onCloseClickHandler} />
        <Image src={imagePreviewUrl} alt="image preview" />
      </ImageWrapper>
    </Container>
  );
};
