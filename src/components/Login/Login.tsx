import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import {
  Alternative,
  Block,
  Container,
  Form,
  Title,
  UserIcon,
  Wrapper,
} from "./LoginStyles";
import userIcon from "../../assets/images/user.svg";
import { GoogleLogin } from "../GoogleLogin/GoogleLogin";
import { useState } from "react";
import { Loader } from "../common/Loader/Loader";
import { createPortal } from "react-dom";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <Wrapper>
        <UserIcon src={userIcon} />
        <Block />
        <Title>Login</Title>
        <GoogleLogin setIsLoading={setIsLoading} />
        <Alternative>or</Alternative>
        <Form>
          <Input title="User Name" type="text" />
          <Input title="Password" type="password" />
          <Button title="Submit" margin="20px 0 0 0" />
        </Form>
      </Wrapper>
      {createPortal(isLoading && <Loader />, document.body)}
    </Container>
  );
};
