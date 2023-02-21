import React from "react";
import styled from "styled-components";
import { Nav } from "../Nav/Nav";
import { COLOR } from "../../assets/styles";
import { RxCross1 } from "react-icons/rx";

const Container = styled.div`
  position: absolute;
  width: 200px;
  height: 100vh;
  top: 0;
  right: ${({ isOpenMenu }) => (isOpenMenu ? "0" : "-250px")};
  background: ${COLOR.orange200};
  transition: ease 1s;
  z-index: 2;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
`;

const Close = styled(RxCross1)`
  width: 30px;
  height: 30px;
  margin: 20px 10px 0 0;
  color: ${COLOR.grey400};
  cursor: pointer;

  &:hover {
    color: ${COLOR.grey200};
    transition: 0.5s ease;
  }
`;

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavBar = ({ setIsOpenMenu, isOpenMenu }) => {
  const onClickHandler = () => {
    setIsOpenMenu(false);
  };
  return (
    <Container isOpenMenu={isOpenMenu}>
      <NavBarWrapper>
        <CloseWrapper>
          <Close onClick={onClickHandler} />
        </CloseWrapper>
        <Nav />
      </NavBarWrapper>
    </Container>
  );
};
