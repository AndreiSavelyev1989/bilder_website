import styled from "styled-components";
import { COLOR } from "@assets/styles";
import { FaPen, FaTrashAlt } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px 20px 20px;
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 600px) {
    padding: 5px 20px 5px 5px;
    gap: 5px;
  }
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

export const TrashButton = styled(FaTrashAlt)`
  width: 20px;
  height: 20px;
  color: ${COLOR.grey400};
  margin-left: 10px;
  transition: all 0.5s ease-out;
  cursor: pointer;
  &:hover {
    color: ${COLOR.red};
    transform: scale(1.1);
  }
`;

export const EditWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Tooltip = styled.span`
  position: absolute;
  top: -20px;
  left: -85px;
  text-align: center;
  align-content: center;
  width: 100px;
  height: 20px;
  font-size: 12px;
  background: ${COLOR.orange200};
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s ease-out;
`;

export const EditButtonWrapper = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

export const EditButton = styled(FaPen)`
  width: 15px;
  height: 15px;
  color: ${COLOR.grey400};
  transition: all 0.3s ease-out;
  margin-top: 5px;
  &:hover {
    color: ${COLOR.grey200};
  }
`;
