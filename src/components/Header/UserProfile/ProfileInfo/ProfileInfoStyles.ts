import styled from "styled-components";
import { COLOR } from "../../../../assets/styles";
import { FaPen } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

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
  font-size: 20px;
`;

export const Title = styled.span`
  color: ${COLOR.grey400};
  font-weight: 700;
  font-size: 20px;
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

export const Tooltip = styled.span`
  position: absolute;
  top: -20px;
  left: -85px;
  text-align: center;
  align-content: center;
  width: 100px;
  height: 20px;
  font-size: 12px;
  background: ${COLOR.white};
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s ease-out;
`;

export const EditButtonWrapper = styled.div`
  position: relative;
  width: 15px;
  height: 15px;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

export const EditButton = styled(FaPen)`
  width: 15px;
  height: 15px;
  color: ${COLOR.grey400};
  transition: all 0.3s ease-out;
  margin-top: 5px;
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
  width: 170px;
  &:hover,
  &:focus {
    background: ${COLOR.orange80};
  }
`;

export const Textarea = styled.textarea`
  max-height: 200px;
  min-height: 200px;
  min-width: 170px;
  max-width: 170px;
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

export const CloseButton = styled(IoMdClose)`
  width: 20px;
  height: 20px;
  transition: all 0.3s ease-out;
  margin-top: 3px;
  &:hover {
    color: ${COLOR.red};
  }
`;
