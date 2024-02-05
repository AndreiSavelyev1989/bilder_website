import React, { memo } from "react";
import { Button, Cross } from "./CloseButtonStyles";

export const CloseButton = memo(({ callback }) => {
  return (
    <Button onClick={callback}>
      <Cross />
    </Button>
  );
});
