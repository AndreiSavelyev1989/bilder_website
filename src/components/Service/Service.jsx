import React from "react";
import { Button } from "../common/Button/Button";
import { createPortal } from "react-dom";
import { useOrderModal } from "../../hooks";
import {
  Container,
  DescriptionBlock,
  DescriptionBlockWrapper,
  ListItem,
  ListWrapper,
  PhotoBlock,
  Title,
  Wrapper,
} from "./ServiceStyles";

export const Service = ({ title, services, photoSrc }) => {
  const { displayModal, setIsOpen } = useOrderModal();

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
            callback={() => setIsOpen(true)}
          />
        </DescriptionBlock>
      </DescriptionBlockWrapper>
      {createPortal(displayModal(), document.body)}
    </Container>
  );
};
