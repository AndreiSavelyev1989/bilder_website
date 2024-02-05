import React from "react";
import { COLOR } from "../../assets/styles";
import { Button } from "../common/Button/Button";
import { executeScroll } from "../../assets/helpers";
import { createPortal } from "react-dom";
import { useOrderModal } from "../../hooks";
import {
  ButtonsWrapper,
  Container,
  MainBlock,
  Title,
  TitleWrapper,
} from "./MainStyles";

const Main = ({ reference }) => {
  const { setIsOpen, displayModal } = useOrderModal();

  return (
    <Container>
      <MainBlock>
        <TitleWrapper>
          <Title>Откройте дверь в свою новую квартиру</Title>
        </TitleWrapper>
        <ButtonsWrapper>
          <Button
            title={"Узнать больше"}
            width={"50%"}
            callback={() => executeScroll(reference.servicesRef)}
          />
          <Button
            title={"Получить консультацию"}
            margin={"0 0 0 20px"}
            width={"50%"}
            background={COLOR.grey100}
            callback={() => setIsOpen(true)}
          />
        </ButtonsWrapper>
      </MainBlock>
      {createPortal(displayModal(), document.body)}
    </Container>
  );
};

export default Main;
