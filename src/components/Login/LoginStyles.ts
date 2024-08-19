import styled from "styled-components";
import { COLOR } from "../../assets/styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${COLOR.orange80};
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  width: 400px;
  height: 80%;
  border-radius: 10px;
  background: ${COLOR.white};
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  @media screen and (max-height: 770px) {
    gap: 10px;
  }
`;

export const UserIcon = styled.img`
  position: absolute;
  top: 0;
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
`;

export const Block = styled.div`
  width: 100%;
  height: 54px;
  background: ${COLOR.orange200};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
`;

export const Alternative = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
