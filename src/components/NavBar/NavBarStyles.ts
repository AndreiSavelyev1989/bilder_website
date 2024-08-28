import styled from "styled-components";
import { COLOR } from "@assets/styles";
import { RxCross1 } from "react-icons/rx";

export const Container = styled.div<{ $isOpenMenu: boolean }>`
  position: absolute;
  width: 120px;
  height: 100%;
  top: 0;
  right: ${({ $isOpenMenu }) => ($isOpenMenu ? "0" : "-250px")};
  background: ${COLOR.orange200};
  transition: ease 1s;
  z-index: 14;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
`;

export const Close = styled(RxCross1)`
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

export const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
