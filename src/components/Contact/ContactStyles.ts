import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContact = styled.div`
  width: 100%;
  margin-left: 10px;
`;
