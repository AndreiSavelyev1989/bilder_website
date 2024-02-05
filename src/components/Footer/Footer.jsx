import React, { forwardRef, memo } from "react";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { Contact } from "../Contact/Contact";
import {
  AddressIcon,
  Container,
  EmailIcon,
  PhoneIcon,
  Title,
  Wrapper,
} from "./FooterStyles";

const Footer = memo(
  forwardRef((props, ref) => {
    return (
      <Container ref={ref}>
        <Title>Контакты</Title>
        <Wrapper>
          <Contact icon={<PhoneIcon />} contact={"+375 (29) 111-11-11"} />
          <Contact icon={<EmailIcon />} contact={"veronika@gmail.com"} />
          <Contact icon={<AddressIcon />} contact={"г. Могилев"} />
          <SocialLinks width={"25%"} small="true" />
        </Wrapper>
      </Container>
    );
  })
);

export default Footer;
