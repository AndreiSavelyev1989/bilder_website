import React from "react";
import styled from "styled-components";
import { COLOR } from "../../assets/styles";

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 70%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 600;
  color: ${COLOR.grey400};
  @media screen and (max-width: 700px) {
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

export const Nav = () => {
  return (
    <List>
      <ListItem>Главная</ListItem>
      <ListItem>Услуги</ListItem>
      <ListItem>Галерея</ListItem>
      <ListItem>Отзывы</ListItem>
      <ListItem>Контакты</ListItem>
    </List>
  );
};
