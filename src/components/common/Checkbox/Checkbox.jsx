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
      <CheckboxText>{text}</CheckboxText>
      {isAgreeProcessingPersonalData && (
        <ProcessingPersonalData> персональных данных</ProcessingPersonalData>
      )}
    </Label>
  );
};
