import { useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { COLOR } from "./assets/styles";
import { ContactInfo } from "./components/ContactInfo/ContactInfo";
import { Main } from "./components/Main/Main";
import { Services } from "./components/Services/Services";
import { OurWorks } from "./components/OurWorks/OurWorks";

const Container = styled.div`
  position: relative;
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

  return (
    <>
      <Container>
        <Header setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
        <NavBar setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
        <ContactInfo />
        <Main />
        <Services />
        <OurWorks isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
        {isOpenModal && <Overlay />}
        {isOpenMenu && <Overlay />}
      </Container>
    </>
  );
};

export default App;
