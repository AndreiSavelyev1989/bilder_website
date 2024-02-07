import React, { memo } from "react";
import { Container, ContentWrapper } from "./LoaderStyles";

export const Loader = memo(() => {
  return (
    <Container>
      <ContentWrapper></ContentWrapper>
    </Container>
  );
});
