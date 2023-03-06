import React, { useState } from "react";
import {
  Label,
  CheckboxInput,
  CheckboxDisplay,
  CheckboxText,
  Asterisk,
  ProcessingPersonalData,
} from "./styled";

export const Checkbox = ({
  text = "Select",
  isRequired,
  isAgreeProcessingPersonalData,
  setIsOpenModal,
}) => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!checked);
  };

  return (
    <Label>
      <CheckboxInput checked={checked} onChange={onChange} />
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
};
