import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Button } from "@common/Button/Button";
import {
  ButtonContainer,
  ButtonWrapper,
  Container,
  RaitingTitle,
  RatingWrapper,
  Textarea,
  TextareaTitle,
  Title,
  Wrapper,
} from "./CreateCommentStyles";
import { CommentsAPI } from "@api/api";
import { UserProfileContext } from "@context/context";
import { createPortal } from "react-dom";
import { Loader } from "@common/Loader/Loader";
import { Rating } from "@common/Rating/Rating";

type Props = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setServerResponse: Dispatch<SetStateAction<any>>;
};

export const CreateComment = ({ setIsModal, setServerResponse }: Props) => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const { profile } = useContext(UserProfileContext) ?? {};

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
      <Title>Написать отзыв</Title>
      <Wrapper>
        <RatingWrapper>
          <RaitingTitle>Рейтинг:</RaitingTitle>
          <Rating getRating={getRating} />
        </RatingWrapper>
        <TextareaTitle>Отзыв:</TextareaTitle>
        <Textarea value={text} onChange={onChangeTextHandler} />
        <ButtonContainer>
          <ButtonWrapper>
            <Button
              title="Отправить"
              margin="5px 0 0 0"
              height="100%"
              onClick={onSendComment}
            />
          </ButtonWrapper>
        </ButtonContainer>
      </Wrapper>
      {createPortal(isLoading && <Loader />, document.body)}
    </Container>
  );
};
