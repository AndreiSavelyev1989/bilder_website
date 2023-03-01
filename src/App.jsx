import { useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { COLOR } from "./assets/styles";
import { ContactInfo } from "./components/ContactInfo/ContactInfo";
import { Main } from "./components/Main/Main";
import { Services } from "./components/Services/Services";
import { OurWorks } from "./components/OurWorks/OurWorks";
import { Modal } from "./components/Modal/Modal";
import { Galleries } from "./components/Galleries/Galleries";
import { ImagePreview } from "./components/ImagePreview/ImagePreview";
import { Order } from "./components/Order/Order";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: ${COLOR.grey400};
  overflow-x: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${COLOR.grey100};
  opacity: 0.5;
  z-index: 10;
`;

const App = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isImagePreview, setIsImagePreview] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const modalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Container>
      <Header setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
      <NavBar setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
      <ContactInfo />
      <Main />
      <Services />
      <OurWorks isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      <Order />
      {isOpenModal || isOpenMenu ? <Overlay /> : null}
      {isOpenModal && (
        <Modal callback={modalHandler}>
          <Galleries
            setIsImagePreview={setIsImagePreview}
            setImagePreviewUrl={setImagePreviewUrl}
          />
        </Modal>
      )}
      {isImagePreview && (
        <ImagePreview
          setIsImagePreview={setIsImagePreview}
          imagePreviewUrl={imagePreviewUrl}
        />
      )}
    </Container>
  );
};

export default App;
