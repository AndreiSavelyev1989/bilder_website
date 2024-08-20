import { Container, Label, TextArea } from "./TextareaStyles";
import { UseFormRegister } from 'react-hook-form';

type FormData = {
    name: string;
    email: string;
    phoneNumber: string;
    textarea: string;
    isPrivateDataChecked: boolean;
  };

type Props = {
  title: string;
  inputId: string;
  register: UseFormRegister<FormData>;
};

export const Textarea = ({ title, inputId, register, ...rest }: Props) => {
  return (
    <Container>
      <Label htmlFor={inputId}>{title}</Label>
      <TextArea id={inputId} {...register(inputId as keyof FormData)} {...rest} />
    </Container>
  );
};
