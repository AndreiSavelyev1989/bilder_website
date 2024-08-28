import { BsInstagram } from "react-icons/bs";
import { SiOdnoklassniki } from "react-icons/si";
import { SlSocialVkontakte } from "react-icons/sl";
import styled from "styled-components";
import { COLOR } from "@assets/styles";

export const SocialLinksWrapper = styled.div<{ width?: string }>`
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

export const InstagramIcon = styled(BsInstagram)<{ $isSmall?: boolean }>`
  width: ${({ $isSmall }) => ($isSmall ? "25px" : "28px")};
  height: ${({ $isSmall }) => ($isSmall ? "25px" : "28px")};
  color: ${COLOR.grey400};
  &:hover {
    transition: 0.5s ease;
    color: ${COLOR.grey200};
    transform: scale(1.1);
  }
`;

export const OdnoklassnikiIcon = styled(SiOdnoklassniki)<{ $isSmall?: boolean }>`
  width: ${({ $isSmall }) => ($isSmall ? "25px" : "28px")};
  height: ${({ $isSmall }) => ($isSmall ? "25px" : "28px")};
  color: ${COLOR.grey400};
  &:hover {
    transition: 0.5s ease;
    color: ${COLOR.grey200};
    transform: scale(1.1);
  }
`;

export const VkontakteIcon = styled(SlSocialVkontakte)<{ $isSmall?: boolean }>`
  width: ${({ $isSmall }) => ($isSmall ? "25px" : "28px")};
  height: ${({ $isSmall }) => ($isSmall ? "25px" : "28px")};
  color: ${COLOR.grey400};
  &:hover {
    transition: 0.5s ease;
    color: ${COLOR.grey200};
    transform: scale(1.1);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
