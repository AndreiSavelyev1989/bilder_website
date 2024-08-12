import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import {
  Block,
  Container,
  Form,
  Title,
  UserIcon,
  Wrapper,
} from "./LoginStyles";
import userIcon from "../../assets/images/user.svg";

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <UserIcon src={userIcon} />
        <Block />
        <Title>Login</Title>
        <Form>
          <Input title="User Name" type="text" />
          <Input title="Password" type="password" />
          <Button title="Submit" margin="20px 0 0 0" />
        </Form>
      </Wrapper>
    </Container>
  );
};
