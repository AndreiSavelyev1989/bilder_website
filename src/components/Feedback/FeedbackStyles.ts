import { ForwardedRef } from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  @media screen and (max-width: 770px) {
    min-height: 900px;
  }
`;

export const Title = styled.h2`
  width: 100%;
  margin: 40px 0 0 0;
  text-align: center;
  font-size: 55px;
`;

export const SlideWrapper = styled.div`
  width: 90%;
  margin-top: 40px;
`;

export const RefBlock = styled.div<{ref: ForwardedRef<unknown>}>`
  height: 20px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  width: 80%;
`;
