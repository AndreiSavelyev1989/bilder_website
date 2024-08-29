import { COLOR } from "@assets/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 150px;
  background: ${COLOR.grey100};
  padding: 10px;
  border-radius: 10px;
`;

export const Title = styled.span`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
