import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Button } from "../common/Button/Button";
import {
  ButtonWrapper,
  Container,
  Textarea,
  TextareaTitle,
  Title,
  Wrapper,
} from "./CreateCommentStyles";
import { CommentsAPI } from "../../api/api";
import { UserProfileContext } from "../../context/context";
import { createPortal } from "react-dom";
import { Loader } from "../common/Loader/Loader";

type Props = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

export const CreateComment = ({ setIsModal }: Props) => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { profile } = useContext(UserProfileContext) ?? {};

  const onChangeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const onSendComment = async () => {
    try {
      setIsLoading(true);
      await CommentsAPI.createComment({ text, email: profile?.email });
      setIsModal(false);
    } catch (err) {
      console.log({ err });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>Оставить отзыв</Title>
      <Wrapper>
        <TextareaTitle>Отзыв:</TextareaTitle>
        <Textarea value={text} onChange={onChangeTextHandler} />
        <ButtonWrapper>
          <Button
            title="Отправить отзыв"
            margin="5px 0 0 0"
            width="180px"
            onClick={onSendComment}
          />
        </ButtonWrapper>
      </Wrapper>
      {createPortal(isLoading && <Loader />, document.body)}
    </Container>
  );
};
