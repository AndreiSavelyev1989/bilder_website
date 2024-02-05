import styled from "styled-components";
import { COLOR } from "../../assets/styles";
import { GiHamburgerMenu } from "react-icons/gi";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  background: ${COLOR.orange200};
  z-index: 100;

  @media screen and (max-width: 700px) {
    justify-content: flex-end;
  }
`;

export const HamburgerWrapper = styled.div`
  display: none;
  width: 50px;
  height: 50px;

  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Hamburger = styled(GiHamburgerMenu)`
  width: 30px;
  height: 30px;
  color: ${COLOR.grey400};
  cursor: pointer;

  &:hover {
    color: ${COLOR.grey200};
    transition: 0.5s ease;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 600;
  font-size: 22px;
  color: ${COLOR.grey400};
  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    align-items: flex-start;
    padding: 0 0 0 30px;
  }
`;

export const ListItem = styled.li`
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
