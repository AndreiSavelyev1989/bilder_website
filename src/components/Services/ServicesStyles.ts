import { ForwardedRef } from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  min-height: 500px;
`;

export const Title = styled.h2`
  min-width: 300px;
  font-size: 55px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RefBlock = styled.div<{ ref: ForwardedRef<unknown> }>`
  height: 20px;
  width: 100%;
`;
