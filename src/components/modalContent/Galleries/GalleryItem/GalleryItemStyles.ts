import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease;
  object-fit: cover;

  &:hover {
    transition: transform 0.8s ease;
    transform: scale(1.5);
  }
`;
