import styled from "styled-components";
import { COLOR } from "../../../assets/styles";

export const DropDownContainer = styled.div<{ width?: string }>`
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

export const DropDownHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${COLOR.white};
  border-radius: 5px;
`;

export const Title = styled.div`
  margin-left: 15px;
  font-size: 20px;
`;

export const DropDownListItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding-left: 20px;
  &:hover {
    background: ${COLOR.orange100};
    transition: 0;
  }
`;

export const DropDownList = styled.ul`
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

export const ListItem = styled.li`
  list-style: none;
  margin-left: 0.8em;
  height: 18px;
  font-size: 20px;
`;

export const TriangleSelect = styled.div<{selectWidth?: string}>`
  width: 0;
  height: 0;
  margin-right: 20px;
  border-style: solid;
  border-width: 10px 6px 0 6px;
  border-color: ${COLOR.grey400} transparent transparent transparent;
`;

export const Triangle = styled.div<{ $display: string }>`
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

export const Label = styled.span`
  position: absolute;
  top: -10px;
  left: 10px;
  min-width: 50px;
  height: 20px;
  padding: 0 5px 0 5px;
  background: ${COLOR.white};
  border: 2px solid ${COLOR.orange200};
  border-radius: 5px;
  text-align: center;
`;

export const Placeholder = styled.span`
  margin-left: 15px;
`;
