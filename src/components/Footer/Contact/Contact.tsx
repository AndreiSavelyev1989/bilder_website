import { ReactNode, memo } from "react";
import { Container, StyledContact, Wrapper } from "./ContactStyles";

type Props = {
  icon: ReactNode;
  contact: string;
};

export const Contact = memo(({ icon, contact }: Props) => {
  return (
    <Container>
      <Wrapper>
        {icon}
        <StyledContact>{contact}</StyledContact>
      </Wrapper>
    </Container>
  );
});
