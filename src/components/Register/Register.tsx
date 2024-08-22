import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import {
  Block,
  Container,
  Form,
  Title,
  UserIcon,
  Wrapper,
} from "./RegisterStyles";
import userIcon from "../../assets/images/user.svg";
import { Loader } from "../common/Loader/Loader";
import { AuthAPI } from "../../api/api";
import { baseUrl } from "../../router";

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
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
      await AuthAPI.register({
        email: data.email,
        username: data.username,
        password: data.password,
      });
      navigate(`${baseUrl}/login`);
    } catch (err) {
      console.log({ err });
    } finally {
      setIsLoading(false);
    }
  };

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
            error={{isError: errors?.username, errorMsg: errors?.username?.message}}
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
            error={{isError: errors?.email, errorMsg: errors?.email?.message}}
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
            error={{isError: errors?.password, errorMsg: errors?.password?.message}}
          />
          <Button title="Отправить" margin="20px 0 0 0" />
        </Form>
      </Wrapper>
      {createPortal(isLoading && <Loader />, document.body)}
    </Container>
  );
};
