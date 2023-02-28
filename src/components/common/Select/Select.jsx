import React, { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

const DropDownContainer = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "272px"};
  height: 54px;
  margin-left: 5px;
  border: 2px solid ${COLOR.grey100};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 2px solid ${COLOR.orange50};
  }
`;

const DropDownHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${COLOR.white};
  border-radius: 5px;
`;

const Title = styled.div`
  margin-left: 15px;
`;

const DropDownListItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding-left: 20px;
  &:hover {
    background: ${COLOR.orange100};
    transition: 0;
  }
`;

const DropDownList = styled.ul`
  position: absolute;
  width: 100%;
  min-height: 100px;
  top: 67px;
  padding: 0px;
  margin: 0;
  background: ${COLOR.white};
  border-top: 4px solid ${COLOR.orange200};
  box-sizing: border-box;
  box-shadow: 0px 20px 30px -10px ${COLOR.grey300};
  border-radius: 0px 0px 5px 5px;
  z-index: 11;
`;

const ListItem = styled.li`
  list-style: none;
  margin-left: 0.8em;
  height: 18px;
`;

const TriangleSelect = styled.div`
  width: 0;
  height: 0;
  margin-right: 20px;
  border-style: solid;
  border-width: 10px 6px 0 6px;
  border-color: ${COLOR.grey400} transparent transparent transparent;
`;

const Triangle = styled.div`
  display: ${({ $display }) => $display || "none"};
  position: absolute;
  right: 30px;
  top: -10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 8px 7px 8px;
  border-color: transparent transparent ${COLOR.orange200} transparent;
`;

const Label = styled.span`
  position: absolute;
  top: -10px;
  left: 10px;
  min-width: 50px;
  height: 20px;
  padding: 0 5px 0 5px;
  background: ${COLOR.orange200};
  border-radius: 5px;
  text-align: center;
`;

const Placeholder = styled.span`
  margin-left: 15px;
`;

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
