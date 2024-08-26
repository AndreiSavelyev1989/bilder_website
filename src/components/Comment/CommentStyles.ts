import styled from "styled-components";
import { COLOR } from "../../assets/styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  gap: 20px;
  border: 1px solid ${COLOR.grey400};
  border-radius: 5px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 80px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Text = styled.p`
  margin: 0;
`;

export const Name = styled.span``;

