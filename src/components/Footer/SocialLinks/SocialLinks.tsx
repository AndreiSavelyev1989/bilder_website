import { memo } from "react";
import {
  InstagramIcon,
  Link,
  OdnoklassnikiIcon,
  SocialLinksWrapper,
  VkontakteIcon,
} from "./SocialLinksStyles";

type Props = {
  width?: string;
  isSmall?: boolean;
}

export const SocialLinks = memo(({ width, isSmall }: Props) => {
  return (
    <SocialLinksWrapper width={width}>
      <Link
        target={"_blank"}
        href={"https://www.instagram.com/"}
        aria-label="Go to instagram social network"
      >
        <InstagramIcon $isSmall={isSmall} />
      </Link>
      <Link
        target={"_blank"}
        href={"https://ok.ru/"}
        aria-label="Go to odnoklasniki social network"
      >
        <OdnoklassnikiIcon $isSmall={isSmall} />
      </Link>
      <Link
        target={"_blank"}
        href={"https://vk.com/"}
        aria-label="Go to vKontakte social network"
      >
        <VkontakteIcon $isSmall={isSmall} />
      </Link>
    </SocialLinksWrapper>
  );
});
