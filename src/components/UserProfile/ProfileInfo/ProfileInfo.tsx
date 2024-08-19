import { COLOR } from "./../../../assets/styles";
import { Button } from "../../common/Button/Button";
import {
  ButtonWrapper,
  Container,
  ContentWrapper,
  Title,
  WrapperItem,
} from "./ProfileInfoStyles";
import { MouseEventHandler } from "react";
import { GoogleProfileType } from "../../../context/type";

type Props = {
  profile: GoogleProfileType;
  logout: MouseEventHandler<HTMLButtonElement>;
};

export const ProfileInfo = ({ profile, logout }: Props) => {
  return (
    <Container>
      <ContentWrapper>
        <WrapperItem>
          <Title>Name:</Title>
          <div>{profile.name}</div>
        </WrapperItem>
        <WrapperItem>
          <Title>Email:</Title>
          <div>{profile.email}</div>
        </WrapperItem>
      </ContentWrapper>
      <ButtonWrapper>
        <Button
          callback={logout}
          title="logout"
          background={COLOR.grey300}
          width="80px"
          height="30px"
        />
      </ButtonWrapper>
    </Container>
  );
};
