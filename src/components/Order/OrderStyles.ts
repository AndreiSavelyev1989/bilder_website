import styled from "styled-components";
import { COLOR } from "@assets/styles";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 90%;
  margin-top: 33px;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const DetailsWrapper = styled.div`
  width: 50%;
  height: 650px;
  background: ${COLOR.white};

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 650px;
  background: ${COLOR.orange100};

  @media screen and (max-width: 1050px) {
    width: 100%;
  }

  @media screen and (max-width: 360px) {
    background: none;
  }
  @media screen and (max-height: 500px) {
    height: 525px;
  }
`;

export const Title = styled.h2`
  font-size: 45px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
`;
