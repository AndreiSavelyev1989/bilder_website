import styled from "styled-components";
import { COLOR } from "../../../assets/styles";
import { VscRunAll } from "react-icons/vsc";
import { FieldError } from "react-hook-form";

type ButtonType = {
  $borderColor?: string;
  $width?: string;
  $height?: string;
  $background?: string;
  $margin?: string;
  $hoverBackground?: string;
  $color?: string;
  $disabled?: FieldError;
};

export const ShowAllIcon = styled(VscRunAll)`
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;

export const StyledButton = styled.button<ButtonType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "54px"};
  margin: ${({ $margin }) => $margin || "0"};
  font-family: "SofiaSansExtraCondensed", sans-serif;
  font-weight: 600;
  font-size: 23px;
  background: ${({ $background }) => $background || COLOR.orange200};
  border-radius: 5px;
  border: ${({ $borderColor }) =>
    $borderColor ? `2px solid ${$borderColor}` : "2px solid transparent"};
  color: ${({ $color }) => $color || COLOR.grey400};
  padding: 10px 20px;
  cursor: ${({ $disabled }) => ($disabled ? "auto" : "pointer")};

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? "1" : "0.8")};
    box-shadow: ${({ $disabled }) =>
      $disabled ? "none" : `0px 5px 10px 2px ${COLOR.grey200}`};
    transition: 0.5s ease;
  }

  &:hover ${ShowAllIcon} {
    transform: scale(1.2);
    transition: 0.5s ease;
  }

  &:disabled {
    background: ${COLOR.grey100};
  }

  @media screen and (max-width: 530px) {
    width: 100%;
    margin: 0;
  }
`;
