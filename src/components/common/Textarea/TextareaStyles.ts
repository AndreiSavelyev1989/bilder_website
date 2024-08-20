import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  margin-left: 5px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

export const TextArea = styled.textarea`
  max-height: 100px;
  min-height: 100px;
  min-width: 100%;
  max-width: 100%;
  overflow: auto;
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid ${COLOR.grey100};
  outline: transparent;
  &:hover,
  &:focus {
    background: ${COLOR.orange80};
  }
`;
