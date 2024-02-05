import React, { memo } from "react";
import { Container } from "./NotificationStyles";

export const Notification = memo(({ message, isSuccess, isError }) => {
  return (
    <Container isSuccess={isSuccess} isError={isError}>
      {message}
    </Container>
  );
});
