import React from "react";
import { BsInstagram } from "react-icons/bs";
import { SiOdnoklassniki } from "react-icons/si";
import { SlSocialVkontakte } from "react-icons/sl";
import styled from "styled-components";
import { COLOR } from "../../assets/styles";

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: ${({ width }) => width || "33.33%"};
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
  width: ${({ small }) => (small ? "25px" : "28px")};
  height: ${({ small }) => (small ? "25px" : "28px")};
  color: ${COLOR.grey400};
  &:hover {
    transition: 0.5s ease;
    color: ${COLOR.grey200};
    transform: scale(1.1);
  }
`;

const OdnoklassnikiIcon = styled(SiOdnoklassniki)`
  width: ${({ small }) => (small ? "25px" : "28px")};
  height: ${({ small }) => (small ? "25px" : "28px")};
  color: ${COLOR.grey400};
  &:hover {
    transition: 0.5s ease;
    color: ${COLOR.grey200};
    transform: scale(1.1);
  }
`;

const VkontakteIcon = styled(SlSocialVkontakte)`
  width: ${({ small }) => (small ? "25px" : "28px")};
  height: ${({ small }) => (small ? "25px" : "28px")};
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

export const SocialLinks = ({ width, small }) => {
  return (
    <SocialLinksWrapper width={width}>
      <Link
        target={"_blank"}
        href={"https://www.instagram.com/"}
        aria-label="Go to instagram social network"
      >
        <InstagramIcon small={small} />
      </Link>
      <Link
        target={"_blank"}
        href={"https://ok.ru/"}
        aria-label="Go to odnoklasniki social network"
      >
        <OdnoklassnikiIcon small={small} />
      </Link>
      <Link
        target={"_blank"}
        href={"https://vk.com/"}
        aria-label="Go to vKontakte social network"
      >
        <VkontakteIcon small={small} />
      </Link>
    </SocialLinksWrapper>
  );
};
