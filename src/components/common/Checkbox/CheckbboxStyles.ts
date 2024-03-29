import styled from "styled-components";
import { COLOR } from "../../../assets/styles";
import { ForwardedRef } from "react";

export const Label = styled.label`
  position: relative;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
`;

export const ProcessingPersonalData = styled.span`
  font-size: 18px;
  color: ${COLOR.orange50};
  text-decoration: underline;
  text-decoration-color: ${COLOR.orange50};
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 1130px) {
    font-size: 14px;
  }
`;

export const CheckboxDisplay = styled.div``;
export const CheckboxText = styled.span`
  font-size: 18px;

  @media screen and (max-width: 1130px) {
    font-size: 14px;
  }
`;
export const Asterisk = styled.span`
  color: ${COLOR.red};
`;
export const CheckboxInput = styled.input.attrs((props) => ({
  type: "checkbox",
  ...props,
}))<{
  ref: ForwardedRef<unknown>;
}>`
  display: none;

  & + ${CheckboxDisplay} {
    width: 24px;
    height: 24px;
    border: 2px solid ${COLOR.grey200};
    border-radius: 5px;
    box-sizing: border-box;
  }

  &:hover + ${CheckboxDisplay} {
    transition: 0.3s ease;
    border-color: ${COLOR.grey100};
  }

  &:checked + ${CheckboxDisplay} {
    &::after {
      content: "";
      position: absolute;
      top: 12px;
      left: 5.5px;
      width: 7.5px;
      height: 3px;
      background: ${COLOR.grey400};
      display: block;
      transform: rotate(45deg);
    }

    &::before {
      content: "";
      position: absolute;
      top: 10px;
      left: 9.5px;
      width: 10px;
      height: 3px;
      background: ${COLOR.grey400};
      display: block;
      transform: rotate(135deg);
    }
    background: ${COLOR.orange200};
    border: 2px solid ${COLOR.orange200};
  }
`;
