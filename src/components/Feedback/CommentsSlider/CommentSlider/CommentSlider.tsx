import { memo } from "react";
import {
  Image,
  Item,
  ItemWrapper,
  Message,
  MessageOwner,
  MessageWrapper,
} from "./CommentSliderStyles";
import { CommentType } from "../../../../assets/types/types";

type Props = {
  data: CommentType;
  index: number;
};

export const CommentSlider = memo(({ data, index }: Props) => {
  return (
    <ItemWrapper
      key={index}
      $url={data.user.profile_image}
      $background={"white"}
    >
      <Item>
        <Image src={data.user.profile_image} alt={"comment-owner"} />
        <MessageWrapper>
          <Message>{data.text}</Message>
          <MessageOwner>{data.user.username}</MessageOwner>
        </MessageWrapper>
      </Item>
    </ItemWrapper>
  );
});
