import { ReactNode } from "react";
import { CloseButton } from "../CloseButton/CloseButton";
import { Container, ContentWrapper } from "./ModalStyles";
import { useScrollVisibility } from "../../../assets/hooks";

type Props = {
  setIsOpenModal: (value: boolean) => void;
  isOpenModal: boolean;
  width?: string;
  height?: string;
  isShowPersonalData?: boolean;
  justifyContent?: string;
  alignItems?: string;
  children: ReactNode
}

export const Modal = ({
  setIsOpenModal,
  isOpenModal,
  width,
  height,
  isShowPersonalData,
  justifyContent,
  alignItems,
  children,
}: Props) => {
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
