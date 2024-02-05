import React, { memo } from "react";
import { Container } from "./NotificationStyles";

const Notification = memo(({ message, isSuccess, isError }) => {
  return (
    <Container isSuccess={isSuccess} isError={isError}>
      {message}
    </Container>
  );
});

export default Notification;
