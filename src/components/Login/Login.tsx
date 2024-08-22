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
import { useEffect, useState } from "react";
import { Loader } from "../common/Loader/Loader";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { AuthAPI } from "../../api/api";
import { Navigate } from "react-router-dom";
import { baseUrl } from "../../router";
import Notification from "./../Notification/Notification";
import { useNotification } from "../../assets/hooks";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverResponse, setServerResponse] = useState<any>(null);
  const { message, status } = useNotification(
    serverResponse && {
      status: serverResponse.status,
      text: serverResponse.data.message,
    }
  );

  useEffect(() => {
    status && setServerResponse(null);
  }, [status]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const response = await AuthAPI.login({
        email: data.email,
        password: data.password,
      });
      setServerResponse(response);
    } catch (err: any) {
      setServerResponse(err?.response);
    } finally {
      setIsLoading(false);
    }
  };

  if (serverResponse?.status >= 200 && serverResponse?.status < 300) {
    return <Navigate to={`${baseUrl}`} />;
  }

  return (
    <Container>
      <Wrapper>
        <Block>
          <UserIcon src={userIcon} />
        </Block>
        <Title>Логин</Title>
        <GoogleLogin setIsLoading={setIsLoading} />
        <Alternative>or</Alternative>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputId={"email"}
            title="Е-мейл"
            type="text"
            {...register("email", {
              required: "Поле 'Е-мейл' обязательное для заполнения",
            })}
            isRequired={true}
            isError={errors?.email}
            error={{ isError: errors?.email, errorMsg: errors?.email?.message }}
          />
          <Input
            inputId={"password"}
            title="Пароль"
            type="password"
            {...register("password", {
              required: "Поле 'Пароль' обязательное для заполнения",
            })}
            isRequired={true}
            isError={errors?.password}
            error={{
              isError: errors?.password,
              errorMsg: errors?.password?.message,
            }}
          />
          <Button title="Отправить" margin="20px 0 0 0" />
        </Form>
      </Wrapper>
      {createPortal(isLoading && <Loader />, document.body)}
      {createPortal(
        (status.success || status.error) && (
          <Notification
            message={message}
            isSuccess={status.success}
            isError={status.error}
          />
        ),
        document.body
      )}
    </Container>
  );
};
