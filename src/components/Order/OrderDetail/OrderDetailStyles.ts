import styled from "styled-components";
import { BsCheck2Square } from "react-icons/bs";
import { COLOR } from "../../../assets/styles";

export const Detail = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const DetailMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
`;

export const DetailTitle = styled.div`
  margin-left: 20px;
  font-size: 30px;
`;

export const Icon = styled(BsCheck2Square)`
  width: 70px;
  height: 70px;
  color: ${COLOR.orange200};
`;
