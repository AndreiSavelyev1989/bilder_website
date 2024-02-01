import React, { memo } from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease;

  &:hover {
    transition: transform 0.8s ease;
    transform: scale(1.5);
  }
`;

export const GalleryItem = memo(({ src, callback }) => {
  return (
    <ImageWrapper>
      <Image src={src} alt="bas-relief" onClick={callback} />
    </ImageWrapper>
  );
});
