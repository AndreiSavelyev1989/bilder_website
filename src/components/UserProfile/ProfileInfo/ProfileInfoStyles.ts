import styled from "styled-components";
import { COLOR } from "../../../assets/styles";
import { FaPen } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const WrapperItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const Title = styled.span`
  color: ${COLOR.grey400};
  font-weight: 700;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const EditButton = styled(FaPen)`
  width: 15px;
  height: 15px;
  color: ${COLOR.grey400};
  transition: all 0.3s ease-out;
  &:hover {
    color: ${COLOR.grey200};
  }
`;

export const Input = styled.input`
  height: 25px;
  border-radius: 5px;
  border: 1px solid ${COLOR.grey100};
  padding: 5px 10px;
  font-size: 14px;
  &:hover,
  &:focus {
    background: ${COLOR.orange80};
  }
`;

export const Textarea = styled.textarea`
  max-height: 100px;
  min-height: 50px;
  min-width: 100%;
  max-width: 200px;
  overflow: auto;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid ${COLOR.grey100};
  outline: transparent;
  &:hover,
  &:focus {
    background: ${COLOR.orange80};
  }
`;