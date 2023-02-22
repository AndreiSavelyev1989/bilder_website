import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

const StyledButton = styled.button`
  width: ${({ width }) => width || "190px"};
  height: ${({ height }) => height || "54px"};
  margin: ${({ margin }) => margin || "0"};
  font-weight: 600;
  font-size: 17px;
  background: ${({ background }) => background || COLOR.orange200};
  border-radius: 5px;
  border: ${({ borderColor }) =>
    borderColor ? `2px solid ${borderColor}` : "2px solid transparent"};
  color: ${({ color }) => color || COLOR.grey400};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    box-shadow: 0px 5px 10px 2px ${COLOR.grey200};
    transition: 0.5s ease;
  }

  @media screen and (max-width: 530px) {
    width: 100%;
    margin: 0;
  }
`;

export const Button = ({
  title,
  borderColor,
  width,
  height,
  background,
  margin,
  hoverBackground,
  color,
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
    >
      {title}
    </StyledButton>
  );
};
