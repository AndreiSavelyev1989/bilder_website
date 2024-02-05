import React, { memo } from "react";
import { ShowAllIcon, StyledButton } from "./ButtonStyles";

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
  }) => {
    return (
      <StyledButton
        borderColor={borderColor}
        width={width}
        height={height}
        background={background}
        margin={margin}
        hoverBackground={hoverBackground}
        color={color}
        onClick={callback}
        type={type}
        disabled={disabled}
      >
        {title}
        {isShowAll && <ShowAllIcon />}
      </StyledButton>
    );
  }
);
