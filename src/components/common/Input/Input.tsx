import { forwardRef, memo } from "react";
import {
  Asterisk,
  Container,
  InputField,
  InputWrapper,
  Label,
  LabelWrapper,
} from "./InputStyles";
import { ChangeHandler, FieldError } from "react-hook-form";
import { renderError } from "../../../assets/helpers";

type Props = {
  title: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  name?: string;
  isRequired?: boolean;
  type?: string;
  isError?: FieldError;
  inputId?: string;
  error?: { isError?: FieldError; errorMsg?: string };
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
        error,
      }: Props,
      ref
    ) => {
      return (
        <Container>
          <LabelWrapper>
            {isRequired && <Asterisk>*</Asterisk>}
            <Label htmlFor={inputId}>{title}</Label>
          </LabelWrapper>
          <InputWrapper>
            <InputField
              id={inputId}
              type={type}
              name={name}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
              isError={isError}
            />
            {renderError(error?.isError, error?.errorMsg || "")}
          </InputWrapper>
        </Container>
      );
    }
  )
);
