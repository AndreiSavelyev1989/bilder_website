import styled from "styled-components";
import { COLOR } from "../../assets/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 15px;
`;

export const Title = styled.h3`
  margin: 0 0 40px 0;
  font-size: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  gap: 10px;
  padding-bottom: 20px;
`;

export const Textarea = styled.textarea`
  max-width: 90%;
  max-height: 70%;
  min-height: 70%;
  min-width: 90%;
  overflow: auto;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid ${COLOR.grey100};
  outline: transparent;
  line-height: 1.8;
  &:hover,
  &:focus {
    background: ${COLOR.orange80};
  }
`;

export const TextareaTitle = styled.span`
  width: 90%;
  font-size: 18px;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
`;

export const RatingWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
`;

export const RaitingTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
`;
