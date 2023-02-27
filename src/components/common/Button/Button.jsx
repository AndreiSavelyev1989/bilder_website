import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../assets/styles";
import { VscRunAll } from "react-icons/vsc";

const ShowAllIcon = styled(VscRunAll)`
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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

  &:hover ${ShowAllIcon} {
    transform: scale(1.2);
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
  isShowAll = false,
  callback,
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
    >
      {title}
      {isShowAll && <ShowAllIcon />}
    </StyledButton>
  );
};
