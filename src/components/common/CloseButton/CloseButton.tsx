import React, { memo } from "react";
import { Button, Cross } from "./CloseButtonStyles";

type Props = {
  callback: () => void;
};

export const CloseButton = memo(({ callback }: Props) => {
  return (
    <Button onClick={callback}>
      <Cross />
    </Button>
  );
});
