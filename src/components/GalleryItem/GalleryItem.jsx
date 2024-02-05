import React, { memo } from "react";
import { Image, ImageWrapper } from "./GalleryItemStyles";

export const GalleryItem = memo(({ src, callback }) => {
  return (
    <ImageWrapper>
      <Image src={src} alt="bas-relief" onClick={callback} />
    </ImageWrapper>
  );
});
