import styled from "styled-components";
import { COLOR } from "@assets/styles";
import { MdPhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { GrMapLocation } from "react-icons/gr";
import { ForwardedRef } from "react";

export const Container = styled.div<{ ref: ForwardedRef<unknown> }>`
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 150px;
  background: ${COLOR.orange200};
`;

export const Title = styled.h3`
  margin: 20px 0;
  font-size: 35px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  font-size: 25px;
  font-weight: 600;

  @media screen and (max-width: 1220px) {
    width: 80%;
  }

  @media screen and (max-width: 920px) {
    width: 100%;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const PhoneIcon = styled(MdPhoneInTalk)`
  width: 25px;
  height: 25px;
`;

export const EmailIcon = styled(TfiEmail)`
  width: 25px;
  height: 25px;
`;

export const AddressIcon = styled(GrMapLocation)`
  width: 25px;
  height: 25px;
`;
