import styled from "styled-components";
import { COLOR } from "../../assets/styles";

export const List = styled.ul<{ $marginTop: number }>`
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
  font-size: 22px;
  color: ${COLOR.grey400};
  @media screen and (max-width: 700px) {
    height: auto;
    width: 100%;
    align-items: flex-start;
    padding: 0 0 0 30px;
  }
  margin-top: ${({ $marginTop }) => `${$marginTop}px`};
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
