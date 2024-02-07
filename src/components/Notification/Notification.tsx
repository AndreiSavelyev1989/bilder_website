import { memo } from "react";
import { Container } from "./NotificationStyles";

type Props = {
  message: string;
  isSuccess: boolean;
  isError: boolean;
};

const Notification = memo(({ message, isSuccess, isError }: Props) => {
  return (
    <Container isSuccess={isSuccess} isError={isError}>
      {message}
    </Container>
  );
});

export default Notification;
