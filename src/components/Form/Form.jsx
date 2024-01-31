import React, { memo } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { COLOR } from "../../assets/styles";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import { Checkbox } from "./../common/Checkbox/Checkbox";
import emailjs from "@emailjs/browser";
import { sendEmail } from "./../../assets/helpers/index";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: ${({ width }) => width || "70%"};
  height: ${({ height }) => height || "530px"};
  border-radius: 10px;
  background: ${COLOR.white};

  @media screen and (max-width: 530px) {
    width: 330px;
  }

  @media screen and (max-width: 360px) {
    margin-top: 80px;
    border: ${({ isModal }) =>
      isModal ? "none" : `1px solid ${COLOR.grey100}`};
  }

  @media screen and (max-height: 500px) {
    height: 405px;
    gap: 0px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 90%;

  /* @media screen and (max-height: 500px) {
    gap: 5px;
  } */
`;

const Title = styled.h2`
  margin: 20px 0 0 0;
  font-size: 32px;

  @media screen and (max-height: 500px) {
    height: 405px;
    margin-top: 10px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-height: 500px) {
    button {
      height: 35px;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-height: 500px) {
    input {
      height: 35px;
    }
  }
`;

const Error = styled.p`
  height: 10px;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  margin: 3px 0;
  color: ${COLOR.red};
`;

export const Form = memo(
  ({
    width,
    height,
    isModal,
    setIsOpenModal,
    setIsOpenPersonalDataModal,
    setIsSentMessageError,
    setIsSentMessageSuccess,
  }) => {
    const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
    } = useForm({
      defaultValues: {
        name: "",
        phoneNumber: "",
        email: "",
        isPrivateDataChecked: false,
      },
    });

    const renderError = (isError, errorMsg) => {
      return <Error isVisible={isError}>{isError ? errorMsg : ""}</Error>;
    };

    const onSubmit = (data) => {
      if (isModal) {
        setIsOpenModal(false);
      }

      reset({
        email: "",
        name: "",
        phoneNumber: "",
        isPrivateDataChecked: false,
      });

      sendEmail(data, setIsSentMessageSuccess, setIsSentMessageError);
    };

    return (
      <Container width={width} height={height} isModal={isModal}>
        <Title>Оставить заявку</Title>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Input
              inputId={"name"}
              title={"Имя"}
              {...register("name", {
                required: "Имя обязательное для заполнения",
              })}
              isRequired={true}
              isError={errors?.name}
            />
            {renderError(errors?.name, errors?.name?.message)}
          </InputWrapper>
          <InputWrapper>
            <Input
              inputId={"tel"}
              type={"tel"}
              title={"Телефон"}
              {...register("phoneNumber", {
                pattern: {
                  value: /^\+?\d{2,3}\s?\(?\d{2,3}\)?[-.\s]?\d{3}[-.\s]?\d{3}$/,
                  message:
                    "Неверный номер. Пример: +375291111111 или 80291111111",
                },
              })}
              isError={errors?.phoneNumber}
            />
            {renderError(errors?.phoneNumber, errors?.phoneNumber?.message)}
          </InputWrapper>
          <InputWrapper>
            <Input
              inputId={"email"}
              title={"E-Mail"}
              {...register("email", {
                pattern: {
                  //eslint-disable-next-line
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message:
                    "Введите правильный email адрес(example@example.com)",
                },
                required: "E-Mail обязательное для заполнения",
              })}
              isRequired={true}
              isError={errors?.email}
            />
            {renderError(errors?.email, errors?.email?.message)}
          </InputWrapper>
          <InputWrapper>
            <Checkbox
              {...register("isPrivateDataChecked", {
                required:
                  "Подтвердите согласие на обработку персональных данных",
              })}
              text={"Я согласен на обработку моих"}
              isRequired={true}
              isAgreeProcessingPersonalData={true}
              setIsOpenModal={setIsOpenPersonalDataModal}
              isSubmitted={watch().isPrivateDataChecked}
            />
            {renderError(
              errors?.isPrivateDataChecked,
              errors?.isPrivateDataChecked?.message
            )}
          </InputWrapper>
          <ButtonWrapper>
            <Button
              title={"Отправить"}
              type={"submit"}
              disabled={
                errors?.name ||
                errors?.email ||
                errors?.isPrivateDataChecked ||
                errors?.phoneNumber
              }
            />
          </ButtonWrapper>
        </FormWrapper>
      </Container>
    );
  }
);
