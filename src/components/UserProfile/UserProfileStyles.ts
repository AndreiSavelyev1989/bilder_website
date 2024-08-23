import styled from "styled-components";
import { COLOR } from "../../assets/styles";

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    padding-left: 40px;
  }
`;

export const UserIconWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  @media screen and (max-width: 1200px) {
    margin-right: 30px;
  }
  @media screen and (max-width: 900px) {
    margin-right: 50px;
  }
`;

export const UserIcon = styled.img`
  width: 100%;
  height: 100%;
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
  @media screen and (max-width: 700px) {
    top: 10px;
    right: -18px;
    border-color: transparent transparent transparent ${COLOR.orange200};
  }
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
  @media screen and (max-width: 700px) {
    top: 11px;
    right: 45px;
    border-color: transparent ${COLOR.orange200} transparent transparent;
  }
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
  @media screen and (max-width: 700px) {
    top: 11px;
    right: 35px;
    border-color: transparent transparent transparent ${COLOR.orange200};
  }
`;

export const ProfileWrapper = styled.div`
  position: absolute;
  top: 62px;
  right: -37px;
  min-width: 170px;
  padding: 5px;
  background: ${COLOR.orange200};
  border-radius: 5px;
  filter: drop-shadow(0 0 5px #000);
  @media screen and (max-width: 1200px) {
    right: -7px;
  }
  @media screen and (max-width: 900px) {
    right: 12px;
  }
  @media screen and (max-width: 700px) {
    top: 0px;
    right: 130px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
