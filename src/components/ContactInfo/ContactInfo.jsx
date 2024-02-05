import React, { memo } from "react";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import {
  ContactWrapper,
  Container,
  Description,
  Link,
  NumberWrapper,
  PhoneIcon,
  PhoneNumber,
  Schedule,
  Title,
  TitleWrapper,
} from "./ContactInfoStyles";

const ContactInfo = memo(() => {
  return (
    <Container>
      <ContactWrapper>
        <PhoneIcon />
        <NumberWrapper>
          <Schedule>ежедневно с 10:00 до 22:00</Schedule>
          <Link href={"tel:+375291111111"}>
            <PhoneNumber>+375 (29) 111-11-11</PhoneNumber>
          </Link>
        </NumberWrapper>
      </ContactWrapper>
      <TitleWrapper>
        <Title>Вероника и Юрий</Title>
        <Description>Барельеф, ремонт и отделка квартир</Description>
      </TitleWrapper>
      <SocialLinks />
    </Container>
  );
});

export default ContactInfo;
