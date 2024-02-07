import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 47%;
  min-height: 400px;

  @media screen and (max-width: 1030px) {
    width: 80%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PhotoBlock = styled.div<{ $photoSrc: string }>`
  width: 50%;
  min-height: 400px;
  background-image: ${({ $photoSrc }) => `url(${$photoSrc})`};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

export const DescriptionBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

export const DescriptionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 100%;
`;

export const Wrapper = styled.div``;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  font-size: 24px;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 35px;
`;
