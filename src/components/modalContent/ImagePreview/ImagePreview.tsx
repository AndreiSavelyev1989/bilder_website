import React, { memo, useCallback } from "react";
import { CloseButton } from "@common/CloseButton/CloseButton";
import { Container, Image, ImageWrapper } from "./ImagePreviewStyles";

type Props = {
  setIsImagePreview: (value: boolean) => void;
  imagePreviewUrl: string;
};

export const ImagePreview = memo(
  ({ setIsImagePreview, imagePreviewUrl }: Props) => {
    const onCloseClickHandler = useCallback(() => {
      setIsImagePreview(false);
    }, [setIsImagePreview]);

    return (
      <Container>
        <ImageWrapper>
          <CloseButton callback={onCloseClickHandler} />
          <Image src={imagePreviewUrl} alt="image preview" />
        </ImageWrapper>
      </Container>
    );
  }
);
