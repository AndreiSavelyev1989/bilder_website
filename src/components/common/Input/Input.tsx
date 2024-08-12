import { forwardRef, memo } from "react";
import {
  Asterisk,
  Container,
  InputField,
  Label,
  LabelWrapper,
} from "./InputStyles";
import { ChangeHandler, FieldError } from "react-hook-form";

type Props = {
  title: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  name?: string;
  isRequired?: boolean;
  type?: string;
  isError?: FieldError;
  inputId?: string;
};
export const Input = memo(
  forwardRef(
    (
      {
        title,
        onChange,
        onBlur,
        name,
        isRequired,
        type,
        isError,
        inputId,
      }: Props,
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
