import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("CustomCheckbox", () => {
  const defaultProps = {
    text: "Select",
    isRequired: false,
    isAgreeProcessingPersonalData: false,
    setIsOpenModal: jest.fn(),
    name: "",
    onChange: jest.fn(),
    isSubmitted: false,
  };
  test("renders with default text and unchecked", () => {
    const { getByText, container } = render(<Checkbox {...defaultProps} />);
    expect(getByText("Select")).toBeInTheDocument();
    const checkbox = container.querySelector("input");
    expect(checkbox && checkbox.checked).toBe(false);
  });

  test("renders with custom text", () => {
    const { getByText } = render(
      <Checkbox {...defaultProps} text="Check me" />
    );
    expect(getByText("Check me")).toBeInTheDocument();
  });

  test("toggles checked state when clicked", () => {
    const mockHandler = jest.fn();
    const { container } = render(
      <Checkbox {...defaultProps} onChange={mockHandler} />
    );
    const checkbox = container.querySelector("input");
    if (checkbox) {
      fireEvent.click(checkbox);
      expect(mockHandler).toHaveBeenCalled();
      expect(checkbox.checked).toBe(true);
      fireEvent.click(checkbox);
      expect(mockHandler).toHaveBeenCalled();
      expect(checkbox.checked).toBe(false);
    }
  });
});
