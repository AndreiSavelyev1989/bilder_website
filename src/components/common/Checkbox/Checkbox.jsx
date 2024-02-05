import React, { forwardRef, useEffect, useState } from "react";
import {
  Label,
  CheckboxInput,
  CheckboxDisplay,
  CheckboxText,
  Asterisk,
  ProcessingPersonalData,
} from "./CheckbboxStyles";

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
    },
    ref
  ) => {
    const [checked, setChecked] = useState(isSubmitted);

    useEffect(() => {
      setChecked(isSubmitted);
    }, [isSubmitted]);

    const onChangeHandler = (e) => {
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
