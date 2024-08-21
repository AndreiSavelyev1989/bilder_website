import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import { Checkbox } from "../common/Checkbox/Checkbox";
import { sendEmail } from "../../assets/helpers/index";
import { createPortal } from "react-dom";
import {
  EmailContext,
  UserProfileContext,
} from "../../context/context";
import { Loader } from "../common/Loader/Loader";
import {
  ButtonWrapper,
  Container,
  Error,
  FormWrapper,
  InputWrapper,
  Title,
} from "./FormStyles";
import { useNotification, usePersonalDataModal } from "../../assets/hooks";
import { Textarea } from "../common/Textarea/Textarea";

type Props = {
  width?: string;
  height?: string;
  isModal?: boolean;
  setIsOpenModal?: (value: boolean) => void;
  externalData?: { [key: string]: string };
};

export const Form = ({
  width,
  height,
  isModal,
  setIsOpenModal,
  externalData,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { displayModal, setIsOpen } = usePersonalDataModal();
  const context = useContext(EmailContext);
  const { status } = useNotification(context && context.response);
  const profileContext = useContext(UserProfileContext);
  const { profile } = profileContext ?? {};
  const { serviceTitle } = externalData ?? {};

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: profile ? profile.name : "",
      phoneNumber: "",
      email: profile ? profile.email : "",
      textarea: serviceTitle ? serviceTitle : "",
      isPrivateDataChecked: false,
    },
  });

  useEffect(() => {
    if (status.success && !isModal) {
      reset({
        email: "",
        name: "",
        phoneNumber: "",
        textarea: "",
        isPrivateDataChecked: false,
      });
    }
  }, [status, isModal, reset]);

  const renderError = (isError: any, errorMsg: any) => {
    return <Error isVisible={isError}>{isError ? errorMsg : ""}</Error>;
  };

  const onSubmit = (data: any) => {
    setIsLoading(true);
    sendEmail(data)
      .then((result: any) => {
        context && context.updateResponse(result);
        if (isModal && setIsOpenModal) {
          setIsOpenModal(false);
        }
      })
      .catch((error: any) => {
        context && context.updateResponse(error);
        if (isModal && setIsOpenModal) {
          setIsOpenModal(false);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
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
            title={"Е-мейл"}
            {...register("email", {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Введите правильный email адрес(example@example.com)",
              },
              required: "E-Mail обязательное для заполнения",
            })}
            isRequired={true}
            isError={errors?.email}
          />
          {renderError(errors?.email, errors?.email?.message)}
        </InputWrapper>
        <InputWrapper>
          <Textarea
            title={"Описание заявки"}
            inputId={"textarea"}
            register={register}
          />
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            {...register("isPrivateDataChecked", {
              required: "Подтвердите согласие на обработку персональных данных",
            })}
            text={"Я согласен на обработку моих"}
            isRequired={true}
            isAgreeProcessingPersonalData={true}
            setIsOpenModal={setIsOpen}
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
              errors?.name || errors?.email || errors?.isPrivateDataChecked
            }
          />
        </ButtonWrapper>
      </FormWrapper>
      {createPortal(displayModal(), document.body)}
      {createPortal(isLoading && <Loader />, document.body)}
    </Container>
  );
};
