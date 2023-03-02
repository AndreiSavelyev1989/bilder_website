import React from "react";
import styled from "styled-components";
import { MdPhoneInTalk } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { SiOdnoklassniki } from "react-icons/si";
import { SlSocialVkontakte } from "react-icons/sl";
import { COLOR } from "../../assets/styles";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 125px;

  @media screen and (max-width: 700px) {
    height: auto;
    padding-bottom: 24px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  gap: 20px;

  @media screen and (max-width: 700px) {
    order: 2;
    margin-top: 24px;
  }
  @media screen and (max-width: 665px) {
    width: 100%;
  }
`;

const PhoneIcon = styled(MdPhoneInTalk)`
  width: 28px;
  height: 28px;
  color: ${COLOR.grey400};
`;

const NumberWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Schedule = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.46;
  color: ${COLOR.orange50};
`;

const PhoneNumber = styled.div`
  font-size: 27px;
  font-weight: 700;
  line-height: 1.5;
  color: ${COLOR.grey400};
  &:hover {
    transition: 0.5s ease;
    color: ${COLOR.grey200};
    transform: scale(1.1);
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 33.33%;
  color: ${COLOR.grey400};

  @media screen and (max-width: 700px) {
    order: 1;
    width: 100%;
    margin-top: 24px;
  }
`;

const Title = styled.div`
  font-size: 38px;
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 22px;
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 33.33%;
  gap: 20px;

  @media screen and (max-width: 700px) {
    order: 3;
    margin-top: 24px;
  }
  @media screen and (max-width: 665px) {
    width: 100%;
  }
`;

const InstagramIcon = styled(BsInstagram)`
  width: 28px;
  height: 28px;
  color: ${COLOR.grey400};
  &:hover {
    transition: 0.5s ease;
    color: ${COLOR.grey200};
    transform: scale(1.1);
  }
`;

const OdnoklassnikiIcon = styled(SiOdnoklassniki)`
  width: 28px;
  height: 28px;
  color: ${COLOR.grey400};
  &:hover {
    transition: 0.5s ease;
    color: ${COLOR.grey200};
    transform: scale(1.1);
  }
`;

const VkontakteIcon = styled(SlSocialVkontakte)`
  width: 28px;
  height: 28px;
  color: ${COLOR.grey400};
  &:hover {
    transition: 0.5s ease;
    color: ${COLOR.grey200};
    transform: scale(1.1);
  }
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const ContactInfo = () => {
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
        <Description>Ремонт и отделка квартир</Description>
      </TitleWrapper>
      <SocialLinksWrapper>
        <Link target={"_blank"} href={"https://www.instagram.com/"}>
          <InstagramIcon />
        </Link>
        <Link target={"_blank"} href={"https://ok.ru/"}>
          <OdnoklassnikiIcon />
        </Link>
        <Link target={"_blank"} href={"https://vk.com/"}>
          <VkontakteIcon />
        </Link>
      </SocialLinksWrapper>
    </Container>
  );
};
