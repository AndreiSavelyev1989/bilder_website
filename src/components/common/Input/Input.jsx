import React, { forwardRef, memo } from "react";
import {
  Asterisk,
  Container,
  InputField,
  Label,
  LabelWrapper,
} from "./InputStyles";

export const Input = memo(
  forwardRef(
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
  )
);
