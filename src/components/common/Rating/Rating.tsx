import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { COLOR } from './../../../assets/styles/index';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Star = styled.span<{
  selected: boolean;
  disabled: boolean;
  size: string;
}>`
  cursor: pointer;
  color: ${(props) => (props.selected ? COLOR.orange200 : COLOR.grey200)};

  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          font-size: 18px;
        `;
      case "medium":
        return css`
          font-size: 24px;
        `;
      case "large":
        return css`
          font-size: 30px;
        `;
      default:
        return css`
          font-size: 24px;
        `;
    }
  }}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

type RatingProps = {
  disabled?: boolean;
  initialRating?: number;
  size?: "small" | "medium" | "large";
  getRating?: (value: number) => void;
};

export const Rating: React.FC<RatingProps> = ({
  disabled = false,
  initialRating = 0,
  size = "medium",
  getRating,
}) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleRating = (index: number) => {
    if (!disabled) {
      setRating(index);
      getRating && getRating(index);
    }
  };

  return (
    <Container>
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          selected={index <= rating}
          onClick={() => handleRating(index)}
          disabled={disabled}
          size={size}
        >
          ★
        </Star>
      ))}
    </Container>
  );
};
