import { lazy, useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { COLOR } from "./assets/styles";
import { useNotification, useScrollYPosition } from "./assets/hooks";
import { ScrollButton } from "./components/common/ScrollButton/ScrollButton";
import { scrollToTop } from "./assets/helpers";
import { createPortal } from "react-dom";
import { EmailContext } from "./context/context";
import { ReferenceType } from "./assets/types/types";

const NavBar = lazy(() => import("./components/NavBar/NavBar"));
const ContactInfo = lazy(() => import("./components/ContactInfo/ContactInfo"));
const Main = lazy(() => import("./components/Main/Main"));
const Services = lazy(() => import("./components/Services/Services"));
const OurWorks = lazy(() => import("./components/OurWorks/OurWorks"));
const Order = lazy(() => import("./components/Order/Order"));
const Feedback = lazy(() => import("./components/Feedback/Feedback"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Notification = lazy(
  () => import("./components/Notification/Notification")
);

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

const App = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const scrollPosition = useScrollYPosition();
  const context = useContext(EmailContext);
  const { message, status } = useNotification(context && context.response);

  const servicesRef = useRef(null);
  const ourWorksRef = useRef(null);
  const commentsRef = useRef(null);
  const contactsRef = useRef(null);

  const reference: ReferenceType = {
    servicesRef: servicesRef,
    ourWorksRef: ourWorksRef,
    commentsRef: commentsRef,
    contactsRef: contactsRef,
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
      <Main reference={reference} />
      <Services ref={servicesRef} />
      <OurWorks ref={ourWorksRef} />
      <Order />
      <Feedback ref={commentsRef} />
      <Footer ref={contactsRef} />
      {scrollPosition > 200 && <ScrollButton callback={scrollToTop} />}
      {createPortal(
        (status.success || status.error) && (
          <Notification
            message={message}
            isSuccess={status.success}
            isError={status.error}
          />
        ),
        document.body
      )}
    </Container>
  );
};

export default App;
