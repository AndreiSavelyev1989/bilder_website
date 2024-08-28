import { memo } from "react";
import { Detail, DetailMark, DetailTitle, Icon } from "./OrderDetailStyles";

type Props = {
  title: string;
};

export const OrderDetail = memo(({ title }: Props) => {
  return (
    <Detail>
      <DetailMark>
        <Icon />
      </DetailMark>
      <DetailTitle>{title}</DetailTitle>
    </Detail>
  );
});
