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
} from "./NewCommentStyles";
import { CommentsAPI } from "@api/api";
import { UserProfileContext } from "@context/context";
import { createPortal } from "react-dom";
import { Loader } from "@common/Loader/Loader";
import { Rating } from "@common/Rating/Rating";
import { CommentType } from "@assets/types/types";

type Props = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setServerResponse: Dispatch<SetStateAction<any>>;
  setUpdatedComment?: Dispatch<SetStateAction<CommentType | null>>;
  data?: CommentType;
  isEdit?: boolean;
};

export const NewComment = ({
  setIsModal,
  setServerResponse,
  setUpdatedComment,
  data,
  isEdit,
}: Props) => {
  const [text, setText] = useState(isEdit && data ? data.text : "");
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(isEdit && data ? data.rating : 0);
  const { profile } = useContext(UserProfileContext) ?? {};

  const onChangeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const onCreateComment = async () => {
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

  const onUpdateComment = async () => {
    try {
      setIsLoading(true);
      const response = await CommentsAPI.updateComment({
        id: data?._id,
        rating,
        text,
      });
      setIsModal(false);
      setServerResponse(response);
      setUpdatedComment && data && setUpdatedComment({ ...data, rating, text })
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
      <Title>{`${isEdit ? "Редактировать" : "Написать"} отзыв`}</Title>
      <Wrapper>
        <RatingWrapper>
          <RaitingTitle>Рейтинг:</RaitingTitle>
          <Rating
            getRating={getRating}
            initialRating={isEdit ? data?.rating : rating}
          />
        </RatingWrapper>
        <TextareaTitle>Отзыв:</TextareaTitle>
        <Textarea value={text} onChange={onChangeTextHandler} />
        <ButtonContainer>
          <ButtonWrapper>
            <Button
              title="Отправить"
              margin="5px 0 0 0"
              height="100%"
              onClick={isEdit ? onUpdateComment : onCreateComment}
            />
          </ButtonWrapper>
        </ButtonContainer>
      </Wrapper>
      {createPortal(isLoading && <Loader />, document.body)}
    </Container>
  );
};
