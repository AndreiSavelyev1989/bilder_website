import styled from "styled-components";
import { COLOR } from "../../../../assets/styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  gap: 20px;
  border: 1px solid ${COLOR.grey400};
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    padding: 5px 20px 5px 5px;
    gap: 5px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 400px) {
    width: 30px;
    height: 30px;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
`;

export const Name = styled.span`
  font-size: 18px;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25px;
`;

export const Title = styled.span`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 700;
`;

export const RaitingWrapper = styled.div`
  width: 30%;
`;
export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
`;
