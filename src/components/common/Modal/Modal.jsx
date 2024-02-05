import React from "react";
import { CloseButton } from "../CloseButton/CloseButton";
import { useScrollVisibility } from "../../../hooks";
import { Container, ContentWrapper } from "./ModalStyles";

export const Modal = ({
  setIsOpenModal,
  isOpenModal,
  width,
  height,
  isShowPersonalData,
  justifyContent,
  alignItems,
  children,
}) => {
  useScrollVisibility(document.body, isOpenModal);
  return (
    <Container isOpenModal={isOpenModal}>
      <ContentWrapper
        width={width}
        height={height}
        isShowPersonalData={isShowPersonalData}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        <CloseButton callback={() => setIsOpenModal(false)} />
        {children}
      </ContentWrapper>
    </Container>
  );
};
