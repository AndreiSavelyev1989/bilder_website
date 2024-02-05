import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5px;
`;

export const Asterisk = styled.span`
  color: red;
`;
export const Label = styled.label`
  margin-left: 5px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 54px;
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid ${COLOR.grey100};
  outline: transparent;
  background: ${({ isError }) => isError && COLOR.lightRed};

  &:hover,
  &:focus {
    background: ${COLOR.orange80};
  }
`;
