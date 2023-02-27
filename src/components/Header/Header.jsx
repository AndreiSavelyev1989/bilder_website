import React from "react";
import styled from "styled-components";
import { COLOR } from "../../assets/styles";
import { GiHamburgerMenu } from "react-icons/gi";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  background: ${COLOR.orange200};

  @media screen and (max-width: 700px) {
    justify-content: flex-end;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;
  width: 50px;
  height: 50px;

  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Hamburger = styled(GiHamburgerMenu)`
  width: 30px;
  height: 30px;
  color: ${COLOR.grey400};
  cursor: pointer;

  &:hover {
    color: ${COLOR.grey200};
    transition: 0.5s ease;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 600;
  color: ${COLOR.grey400};
  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    align-items: flex-start;
    padding: 0 0 0 30px;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  min-width: 100px;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: linear 0.1s;
    transform: translate(0px, -4px);
    color: ${COLOR.grey200};
  }

  @media screen and (max-width: 700px) {
    height: 60px;
  }
`;

export const Header = ({ setIsOpenMenu, isOpenMenu }) => {
  const onClickHandler = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <Container>
      <HamburgerWrapper>
        <Hamburger onClick={onClickHandler} />
      </HamburgerWrapper>
      <NavWrapper>
        <List>
          <ListItem>Главная</ListItem>
          <ListItem>Услуги</ListItem>
          <ListItem>Галерея</ListItem>
          <ListItem>Отзывы</ListItem>
          <ListItem>Контакты</ListItem>
        </List>
      </NavWrapper>
    </Container>
  );
};
