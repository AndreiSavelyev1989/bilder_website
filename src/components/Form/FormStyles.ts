import styled from "styled-components";
import { COLOR } from "../../assets/styles";

export const Container = styled.div<{
  width?: string;
  height?: string;
  isModal?: boolean;
}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: ${({ width }) => width || "70%"};
  height: ${({ height }) => height};
  border-radius: 10px;
  background: ${COLOR.white};

  @media screen and (max-width: 530px) {
    width: 330px;
  }

  @media screen and (max-width: 360px) {
    margin-top: 80px;
    border: ${({ isModal }) =>
      isModal ? "none" : `1px solid ${COLOR.grey100}`};
  }

  @media screen and (max-height: 500px) {
    height: 405px;
    gap: 0px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 90%;
`;

export const Title = styled.h2`
  margin: 20px 0 0 0;
  font-size: 32px;

  @media screen and (max-height: 500px) {
    height: 405px;
    margin-top: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-height: 500px) {
    button {
      height: 35px;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-height: 500px) {
    input {
      height: 35px;
    }
  }
`;

export const Error = styled.p<{ isVisible: boolean }>`
  height: 10px;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  margin: 3px 0;
  color: ${COLOR.red};
`;
