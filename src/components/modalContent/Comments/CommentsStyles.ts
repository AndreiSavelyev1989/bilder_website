import styled from "styled-components";
import { COLOR } from "@assets/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
  overflow-y: auto;
  padding: 0 10px;
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
  margin: 0 0 20px 0;
  font-size: 30px;
`
