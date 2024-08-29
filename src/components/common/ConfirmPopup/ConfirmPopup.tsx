import { Button } from "../Button/Button";
import { ButtonWrapper, Container, Title } from "./ConfirmPopupStyles";

type Props = {
  deleteHandler: () => void;
  cancelHandler: () => void;
};

export const ConfirmPopup = ({ deleteHandler, cancelHandler }: Props) => {
  return (
    <Container>
      <Title>Вы действительно хотите удалить?</Title>
      <ButtonWrapper>
        <Button title="Да" width="50px" height="30px" onClick={deleteHandler} />
        <Button
          title="Нет"
          width="50px"
          height="30px"
          onClick={cancelHandler}
        />
      </ButtonWrapper>
    </Container>
  );
};
