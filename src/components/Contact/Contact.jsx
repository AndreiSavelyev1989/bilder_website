import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContact = styled.div`
  width: 100%;
  margin-left: 10px;
`;

export const Contact = ({ icon, contact }) => {
  return (
    <Container>
      <Wrapper>
        {icon}
        <StyledContact>{contact}</StyledContact>
      </Wrapper>
    </Container>
  );
};
