import React, { memo } from "react";
import { Image, ImageWrapper } from "./GalleryItemStyles";

type Props = {
  src: string;
  callback: (event: React.MouseEvent<HTMLElement>) => void;
};

export const GalleryItem = memo(({ src, callback }: Props) => {
  return (
    <ImageWrapper>
      <Image src={src} alt="bas-relief" onClick={callback} />
    </ImageWrapper>
  );
});
