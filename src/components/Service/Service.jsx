import React, { memo } from "react";
import styled from "styled-components";
import { Button } from "../common/Button/Button";

const Container = styled.div`
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

const PhotoBlock = styled.div`
  width: 50%;
  min-height: 400px;
  background-image: ${({ photoSrc }) => `url(${photoSrc})`};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

const DescriptionBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

const DescriptionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 100%;
`;

const Wrapper = styled.div``;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  font-size: 24px;
`;

const Title = styled.h3`
  width: 100%;
  font-size: 35px;
`;

export const Service = memo(({ title, services, photoSrc, setIsOpenModal }) => {
  return (
    <Container>
      <PhotoBlock photoSrc={photoSrc} />
      <DescriptionBlockWrapper>
        <DescriptionBlock>
          <Wrapper>
            <Title>{title}</Title>
            <ListWrapper>
              {services.map((el) => (
                <ListItem key={el.id}>{el.title}</ListItem>
              ))}
            </ListWrapper>
          </Wrapper>
          <Button
            title={"Заказать"}
            width={"100%"}
            callback={() => setIsOpenModal(true)}
          />
        </DescriptionBlock>
      </DescriptionBlockWrapper>
    </Container>
  );
});
