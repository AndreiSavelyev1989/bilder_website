import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 30px;
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
`;

export const Title = styled.h3`
  font-size: 30px;
  margin: 15px 0;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  text-indent: 20px;
  margin: 10px 0;
`;
