import { ChangeEvent, forwardRef, useEffect, useState } from "react";
import {
  Label,
  CheckboxInput,
  CheckboxDisplay,
  CheckboxText,
  Asterisk,
  ProcessingPersonalData,
} from "./CheckbboxStyles";

type Props = {
  text: string;
  isRequired: boolean;
  isAgreeProcessingPersonalData: boolean;
  setIsOpenModal: (value: boolean) => void;
  name: string;
  onChange: (event: any) => void;
  isSubmitted?: boolean;
};

export const Checkbox = forwardRef(
  (
    {
      text = "Select",
      isRequired,
      isAgreeProcessingPersonalData,
      setIsOpenModal,
      name,
      onChange,
      isSubmitted,
    }: Props,
    ref
  ) => {
    const [checked, setChecked] = useState(isSubmitted);

    useEffect(() => {
      setChecked(isSubmitted);
    }, [isSubmitted]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);
      setChecked(!checked);
    };

    return (
      <Label>
        <CheckboxInput
          name={name}
          checked={checked}
          onChange={onChangeHandler}
          ref={ref}
        />
        <CheckboxDisplay />
        {isRequired && <Asterisk>*</Asterisk>}
        <CheckboxText>
          {text}
          {isAgreeProcessingPersonalData && (
            <ProcessingPersonalData
              onClick={(e) => {
                e.preventDefault();
                setIsOpenModal(true);
              }}
            >
              {" "}
              персональных данных
            </ProcessingPersonalData>
          )}
        </CheckboxText>
      </Label>
    );
  }
);
