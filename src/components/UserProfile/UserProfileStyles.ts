import styled from "styled-components";
import { COLOR } from "../../assets/styles";

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

export const UserIconWrapper = styled.div`
  position: relative;
`;

export const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Triangle = styled.div`
  position: absolute;
  top: -19px;
  right: 14px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 10px 10px;
  border-color: transparent transparent ${COLOR.orange200} transparent;
`;
export const TriangleUp = styled.div`
  position: absolute;
  top: 18px;
  right: -23px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 10px 10px;
  border-color: ${COLOR.orange200} transparent transparent transparent;
  filter: drop-shadow(0 0 5px #000);
`;
export const TriangleDown = styled.div`
  position: absolute;
  top: 8px;
  right: -23px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 10px 10px;
  border-color: transparent transparent ${COLOR.orange200} transparent;
  filter: drop-shadow(0 0 5px #000);
`;

export const ProfileWrapper = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  width: 200px;
  height: 200px;
  padding: 10px;
  background: ${COLOR.orange200};
  border-radius: 5px;
  filter: drop-shadow(0 0 5px #000);
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
