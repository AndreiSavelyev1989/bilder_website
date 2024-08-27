import styled from "styled-components";
import { COLOR } from "../../assets/styles";

export const ItemWrapper = styled.div<{ $background: string; $url: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: ${({ $background }) => $background};
  @media screen and (max-width: 770px) {
    height: 650px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  border: 1px solid ${COLOR.grey200};
  border-radius: 10px;
  @media screen and (max-width: 770px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
`;

export const Message = styled.div`
  align-content: center;
  font-size: 22px;
  height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #d4cfcf;
    border-radius: 10px;
  }
`;

export const MessageOwner = styled.div`
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
  font-size: 24px;
`;
