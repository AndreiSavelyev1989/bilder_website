import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 0 40px 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 40px 20px 0 0;

  @media screen and (max-width: 871px) {
    flex-direction: column;
    justify-content: center;
    margin: 0;
    gap: 20px;
  }
`;

export const GalleriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  gap: 20px;
  overflow-y: auto;
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${COLOR.grey100};
    border-radius: 10px;
  }

  @media screen and (max-width: 440px) {
    padding: 5px;
  }
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0 0 0 70px;
  font-size: 45px;

  @media screen and (max-width: 871px) {
    margin: 30px 0 0 0;
    text-align: center;
  }
`;

export const SelectWrapper = styled.div`
  margin-right: 51px;
  @media screen and (max-width: 871px) {
    margin: 0;
  }
`;
