import { memo, MouseEventHandler, ReactElement } from "react";
import { ShowAllIcon, StyledButton } from "./ButtonStyles";
import { FieldError } from "react-hook-form";

type Props = {
  title?: string;
  borderColor?: string;
  width?: string;
  height?: string;
  background?: string;
  margin?: string;
  hoverBackground?: string;
  color?: string;
  isShowAll?: boolean;
  callback?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: FieldError;
  children?: ReactElement;
};

export const Button = memo(
  ({
    title,
    borderColor,
    width,
    height,
    background,
    margin,
    hoverBackground,
    color,
    isShowAll = false,
    callback,
    type,
    disabled,
    children,
  }: Props) => {
    return (
      <StyledButton
        $borderColor={borderColor}
        $width={width}
        $height={height}
        $background={background}
        $margin={margin}
        $hoverBackground={hoverBackground}
        $color={color}
        onClick={callback}
        type={type}
        $disabled={disabled}
        onMouseDown={callback}
      >
        {title}
        {isShowAll && <ShowAllIcon />}
        {children}
      </StyledButton>
    );
  }
);
