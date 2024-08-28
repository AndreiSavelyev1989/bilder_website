import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { Button } from "@common/Button/Button";
import { Input } from "@common/Input/Input";
import {
  Block,
  Container,
  Form,
  Title,
  UserIcon,
  Wrapper,
} from "./RegisterStyles";
import userIcon from "@assets/images/user.svg";
import { Loader } from "@common/Loader/Loader";
import { AuthAPI } from "@api/api";
import { baseUrl } from "@router/index";
import { useNotification } from "@assets/hooks";
import Notification from "@common/Notification/Notification";

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverResponse, setServerResponse] = useState<any>(null);
  const { message, status } = useNotification(
    serverResponse && {
      status: serverResponse.status,
      text: `${serverResponse.data.error}. ${serverResponse.data.message}`,
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
      const response = await AuthAPI.register({
        email: data.email,
        username: data.username,
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
    return <Navigate to={`${baseUrl}/login`} />;
  }

  return (
    <Container>
      <Wrapper>
        <Block>
          <UserIcon src={userIcon} />
        </Block>
        <Title>Регистрация</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputId={"username"}
            title="Имя пользователя"
            type="text"
            {...register("username", {
              required: "Поле 'Имя пользователя' обязательное для заполнения",
            })}
            isRequired={true}
            isError={errors?.username}
            error={{
              isError: errors?.username,
              errorMsg: errors?.username?.message,
            }}
          />
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
