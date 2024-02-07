import { memo } from "react";
import { Arrow, Button } from "./ScrollButtonStyles";

type Props = {
  callback: () => void;
};
export const ScrollButton = memo(({ callback }: Props) => {
  return (
    <Button onClick={callback}>
      <Arrow />
    </Button>
  );
});
