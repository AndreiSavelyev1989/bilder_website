import React, { memo } from "react";
import { Arrow, Button } from "./ScrollButtonStyles";

export const ScrollButton = memo(({ callback }) => {
  return (
    <Button onClick={callback}>
      <Arrow />
    </Button>
  );
});
