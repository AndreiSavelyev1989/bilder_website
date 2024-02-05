import React, { useState } from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListItemContainer,
  Label,
  ListItem,
  Placeholder,
  Title,
  Triangle,
  TriangleSelect,
} from "./SelectStyles";

export const Select = ({
  options = [],
  isPlaceholderExist = false,
  isLabelExist = false,
  width,
  placeholder,
  label,
  getSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    id: 4,
    title: "Все работы",
  });

  const toggleOpen = () => setIsOpen(true);

  const handleOptionClick = (value) => () => {
    setSelectedOption(value);
    getSelectedOption(value);
    setIsOpen(false);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <DropDownContainer tabIndex={0} onBlur={handleBlur} width={width}>
      {isLabelExist && <Label>{label}</Label>}
      <DropDownHeader onClick={toggleOpen}>
        {!selectedOption && isPlaceholderExist ? (
          <Placeholder>{placeholder}</Placeholder>
        ) : (
          <Title>
            {selectedOption?.title || (options.length && options[0].title)}
          </Title>
        )}
        <TriangleSelect selectWidth={width} />
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          {options.length &&
            options.map((option) => (
              <DropDownListItemContainer
                key={option.id}
                onClick={handleOptionClick(option)}
              >
                <ListItem>{option.title}</ListItem>
              </DropDownListItemContainer>
            ))}
          <Triangle $display={isOpen && "block"} />
        </DropDownList>
      )}
    </DropDownContainer>
  );
};
