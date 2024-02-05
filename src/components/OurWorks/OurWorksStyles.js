import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: hidden;
`;

export const Title = styled.h2`
  min-width: 300px;
  font-size: 55px;
  text-align: center;
`;

export const WorksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80%;
  margin-top: 30px;
`;

export const RefBlock = styled.div`
  height: 20px;
  width: 100%;
`;
