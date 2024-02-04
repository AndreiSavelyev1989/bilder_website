import { memo, useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { COLOR } from "./assets/styles";
import { ContactInfo } from "./components/ContactInfo/ContactInfo";
import { Main } from "./components/Main/Main";
import { Services } from "./components/Services/Services";
import { OurWorks } from "./components/OurWorks/OurWorks";
import { Order } from "./components/Order/Order";
import { Feedback } from "./components/Feedback/Feedback";
import { Footer } from "./components/Footer/Footer";
import { useScrollYPosition } from "./assets/hooks";
import { ScrollButton } from "./components/common/ScrollButton/ScrollButton";
import { executeScroll, scrollToTop } from "./assets/helpers";
import { useNotification } from "./hooks";
import { createPortal } from "react-dom";
import { Notification } from "./components/Notification/Notification";
import { ResponseContext } from "./context/context";

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

const App = memo(() => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const scrollPosition = useScrollYPosition();
  const context = useContext(ResponseContext);
  const { message, status } = useNotification(context.response);

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

  return (
    <Container>
      <Header
        setIsOpenMenu={setIsOpenMenu}
        isOpenMenu={isOpenMenu}
        reference={reference}
        executeScroll={executeScroll}
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
});

export default App;
