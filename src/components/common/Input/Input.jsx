import React, { forwardRef } from "react";
import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5px;
`;

const Asterisk = styled.span`
  color: red;
`;
const Label = styled.label`
  margin-left: 5px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
`;

const InputField = styled.input`
  width: 100%;
  height: 54px;
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid ${COLOR.grey100};
  outline: transparent;
  background: ${({ isError }) => isError && COLOR.lightRed};

  &:hover,
  &:focus {
    background: ${COLOR.orange80};
  }
`;

export const Input = forwardRef(
  (
    { title, onChange, onBlur, name, isRequired, type, isError, inputId },
    ref
  ) => {
    return (
      <Container>
        <LabelWrapper>
          {isRequired && <Asterisk>*</Asterisk>}
          <Label htmlFor={inputId}>{title}</Label>
        </LabelWrapper>
        <InputField
          id={inputId}
          type={type}
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          isError={isError}
        />
      </Container>
    );
  }
);
