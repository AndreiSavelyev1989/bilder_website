import { useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { COLOR } from "./assets/styles";

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${COLOR.grey100};
  opacity: 0.5;
`;

const App = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <Container>
        <Header setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
        <NavBar setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          reiciendis consequatur beatae adipisci aliquid itaque impedit eligendi
          maxime id perferendis repellendus eos tenetur hic mollitia, enim
          nesciunt doloribus consectetur voluptate.
        </div>
      </Container>
      {isOpenMenu && <Overlay />}
    </>
  );
};

export default App;
