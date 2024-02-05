import React, { forwardRef, useCallback } from "react";
import { Button } from "../common/Button/Button";
import { Slideshow } from "../Slideshow/Slideshow";
import { COLOR } from "../../assets/styles";
import { createPortal } from "react-dom";
import { useGalleryModal } from "../../hooks";
import {
  ButtonWrapper,
  Container,
  RefBlock,
  Title,
  WorksWrapper,
} from "./OurWorksStyles";

const OurWorks = forwardRef((props, ref) => {
  const { displayModal, setIsOpen } = useGalleryModal();

  const modalHandler = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <Container>
      <RefBlock ref={ref} />
      <Title>Наши работы</Title>
      <WorksWrapper>
        <Slideshow />
      </WorksWrapper>
      <ButtonWrapper>
        <Button
          title={`Показать все работы `}
          height={"54px"}
          width={"350px"}
          isShowAll={true}
          background={COLOR.grey100}
          callback={modalHandler}
        />
      </ButtonWrapper>
      {createPortal(displayModal(), document.body)}
    </Container>
  );
});

export default OurWorks;
