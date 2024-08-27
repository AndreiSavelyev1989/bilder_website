import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button } from "../common/Button/Button";
import {
  ButtonWrapper,
  Container,
  RaitingTitle,
  RatingWrapper,
  Textarea,
  TextareaTitle,
  Title,
  Wrapper,
} from "./CreateCommentStyles";
import { CommentsAPI } from "../../api/api";
import { UserProfileContext } from "../../context/context";
import { createPortal } from "react-dom";
import { Loader } from "../common/Loader/Loader";
import { Rating } from "../common/Rating/Rating";
import { useNotification } from "../../assets/hooks";
import Notification from "./../Notification/Notification";

type Props = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

export const CreateComment = ({ setIsModal }: Props) => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [serverResponse, setServerResponse] = useState<any>(null);
  const { profile } = useContext(UserProfileContext) ?? {};
  const { message, status } = useNotification(
    serverResponse && {
      status: serverResponse.status,
      text: serverResponse.data.error,
    }
  );


  useEffect(() => {
    status && setServerResponse(null);
  }, [status]);

  const onChangeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const onSendComment = async () => {
    try {
      setIsLoading(true);
      const response = await CommentsAPI.createComment({
        rating,
        text,
        email: profile?.email,
      });
      setIsModal(false);
      setServerResponse(response);
    } catch (err: any) {
      setServerResponse(err?.response);
    } finally {
      setIsLoading(false);
    }
  };

  const getRating = (value: number) => {
    setRating(value);
  };

  return (
    <Container>
      <Title>Оставить отзыв</Title>
      <Wrapper>
        <RatingWrapper>
          <RaitingTitle>Рейтинг:</RaitingTitle>
          <Rating getRating={getRating} />
        </RatingWrapper>
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
