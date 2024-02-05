import React, { memo } from "react";
import {
  InstagramIcon,
  Link,
  OdnoklassnikiIcon,
  SocialLinksWrapper,
  VkontakteIcon,
} from "./SocialLinksStyles";

export const SocialLinks = memo(({ width, small }) => {
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
});
