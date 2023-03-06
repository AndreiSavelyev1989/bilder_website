import { useRef, useState } from "react";
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
import { Comments } from "./components/Comments/Comments";
import { Footer } from "./components/Footer/Footer";
import { useScrollYPosition } from "./assets/hooks";
import { ScrollButton } from "./components/common/ScrollButton/ScrollButton";
import { scrollToTop } from "./assets/helpers";
import { Form } from "./components/Form/Form";
import { PersonalData } from "./components/PersonalData/PersonalData";

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
  const [isOpenGalleryModal, setIsOpenGalleryModal] = useState(false);
  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);
  const [isOpenPersonalDataModal, setIsOpenPersonalDataModal] = useState(false);
  const [isImagePreview, setIsImagePreview] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const scrollPosition = useScrollYPosition();
  const mainRef = useRef(null);
  const servicesRef = useRef(null);
  const ourWorksRef = useRef(null);
  const commentsRef = useRef(null);
  const contactsRef = useRef(null);
  const reference = {
    mainRef: mainRef,
    servicesRef: servicesRef,
    ourWorksRef: ourWorksRef,
    commentsRef: commentsRef,
    contactsRef: contactsRef,
  };

  const modalHandler = (isOpen, setIsOpen) => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Header
        setIsOpenMenu={setIsOpenMenu}
        isOpenMenu={isOpenMenu}
        reference={reference}
      />
      <NavBar
        setIsOpenMenu={setIsOpenMenu}
        isOpenMenu={isOpenMenu}
        reference={reference}
      />
      <ContactInfo />
      <Main
        ref={mainRef}
        reference={reference}
        setIsOpenModal={setIsOpenOrderModal}
      />
      <Services ref={servicesRef} setIsOpenModal={setIsOpenOrderModal} />
      <OurWorks
        isOpenModal={isOpenGalleryModal}
        setIsOpenModal={setIsOpenGalleryModal}
        ref={ourWorksRef}
      />
      <Order />
      <Comments ref={commentsRef} />
      <Footer ref={contactsRef} />
      {isOpenGalleryModal || isOpenOrderModal || isOpenMenu ? (
        <Overlay />
      ) : null}
      {isOpenGalleryModal && (
        <Modal
          isOpenModal={isOpenGalleryModal}
          setIsOpenModal={setIsOpenGalleryModal}
          callback={modalHandler}
        >
          <Galleries
            setIsImagePreview={setIsImagePreview}
            setImagePreviewUrl={setImagePreviewUrl}
          />
        </Modal>
      )}
      {isOpenOrderModal && (
        <Modal
          isOpenModal={isOpenOrderModal}
          setIsOpenModal={setIsOpenOrderModal}
          callback={modalHandler}
          width={"35%"}
          height={"550px"}
        >
          <Form
            width={"100%"}
            height={"100%"}
            isModal={true}
            setIsOpenModal={setIsOpenPersonalDataModal}
          />
        </Modal>
      )}
      {isOpenPersonalDataModal && (
        <Modal
          isOpenModal={isOpenPersonalDataModal}
          setIsOpenModal={setIsOpenPersonalDataModal}
          callback={modalHandler}
          width="40%"
        >
          <PersonalData />
        </Modal>
      )}
      {isImagePreview && (
        <ImagePreview
          setIsImagePreview={setIsImagePreview}
          imagePreviewUrl={imagePreviewUrl}
        />
      )}
      {scrollPosition > 200 && <ScrollButton callback={scrollToTop} />}
    </Container>
  );
};

export default App;
