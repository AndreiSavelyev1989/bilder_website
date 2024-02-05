import React, { memo } from "react";
import { Detail, DetailMark, DetailTitle, Icon } from "./OrderDetailStyles";

export const OrderDetail = memo(({ title }) => {
  return (
    <Detail>
      <DetailMark>
        <Icon />
      </DetailMark>
      <DetailTitle>{title}</DetailTitle>
    </Detail>
  );
});
