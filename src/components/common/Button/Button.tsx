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
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: FieldError;
  children?: ReactElement;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
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
    onClick,
    onMouseDown,
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
        onClick={onClick}
        type={type}
        $disabled={disabled}
        onMouseDown={onMouseDown}
      >
        {title}
        {isShowAll && <ShowAllIcon />}
        {children}
      </StyledButton>
    );
  }
);
