import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 4px;
`;
export const WrapperItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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
