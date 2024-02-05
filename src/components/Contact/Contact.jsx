import React, { memo } from "react";
import { Container, StyledContact, Wrapper } from "./ContactStyles";

export const Contact = memo(({ icon, contact }) => {
  return (
    <Container>
      <Wrapper>
        {icon}
        <StyledContact>{contact}</StyledContact>
      </Wrapper>
    </Container>
  );
});
