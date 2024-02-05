import React, { memo, useCallback } from "react";
import { CloseButton } from "../common/CloseButton/CloseButton";
import { Container, Image, ImageWrapper } from "./ImagePreviewStyles";

export const ImagePreview = memo(({ setIsImagePreview, imagePreviewUrl }) => {
  const onCloseClickHandler = useCallback(() => {
    setIsImagePreview(false);
  }, []);

  return (
    <Container>
      <ImageWrapper>
        <CloseButton callback={onCloseClickHandler} />
        <Image src={imagePreviewUrl} alt="image preview" />
      </ImageWrapper>
    </Container>
  );
});
