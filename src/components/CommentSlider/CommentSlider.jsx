import React, { memo } from "react";
import {
  Image,
  Item,
  ItemWrapper,
  Message,
  MessageOwner,
  MessageWrapper,
} from "./CommentSliderStyles";

export const CommentSlider = memo(({ data, index }) => {
  return (
    <ItemWrapper key={index} url={data.url} background={data.background}>
      <Item>
        <Image src={data.url} alt={"comment-owner"} />
        <MessageWrapper>
          <Message>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            consequuntur aperiam illum tempore cupiditate corporis totam
            aspernatur corrupti nulla numquam laboriosam illo ratione voluptate
            perferendis, ipsam eveniet ea modi ad.
          </Message>
          <MessageOwner>John Smith</MessageOwner>
        </MessageWrapper>
      </Item>
    </ItemWrapper>
  );
});
