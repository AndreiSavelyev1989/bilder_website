import { Dispatch, memo, SetStateAction, useContext, useState } from "react";
import {
  AuthorWrapper,
  CommentWrapper,
  Container,
  Image,
  ImageWrapper,
  Name,
  RaitingWrapper,
  Text,
  Title,
  TrashButton,
  Wrapper,
} from "./CommentStyles";
import { CommentType } from "@assets/types/types";
import { Rating } from "@common/Rating/Rating";
import { dateFormat, isAuthorCheck } from "@assets/helpers";
import { CommentsAPI } from "@api/api";
import { UserProfileContext } from "@context/context";
import { ConfirmPopup } from "@components/common/ConfirmPopup/ConfirmPopup";

type Props = {
  data: CommentType;
  comments: CommentType[];
  getFilteredComments: (comments: CommentType[]) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setServerResponse: Dispatch<SetStateAction<any>>;
};

export const Comment = memo(
  ({
    data,
    comments,
    getFilteredComments,
    setIsLoading,
    setServerResponse,
  }: Props) => {
    const { profile } = useContext(UserProfileContext) ?? {};
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const deleteComment = async () => {
      try {
        setIsLoading(true);
        const response = await CommentsAPI.deleteComment(data._id);
        const filteredComments = comments.filter(
          (comment) => comment._id !== data._id
        );
        getFilteredComments(filteredComments);
        setServerResponse(response);
      } catch (err: any) {
        setServerResponse(err?.response);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <Container>
        <ImageWrapper>
          <Image src={data.user.profile_image} alt="avatar" />
        </ImageWrapper>
        <CommentWrapper>
          <AuthorWrapper>
            <Wrapper>
              <Title>Автор:</Title>
              <Name>{data.user.username}</Name>
            </Wrapper>
            <RaitingWrapper>
              <Rating initialRating={data.rating} disabled />
            </RaitingWrapper>
            {profile && isAuthorCheck(profile.email, data.email) && (
              <TrashButton onClick={() => setIsOpenPopup(true)} />
            )}
          </AuthorWrapper>
          <Wrapper>
            <Title>Дата публикации:</Title>
            <Name>{dateFormat(data.createdAt)}</Name>
          </Wrapper>
          <Wrapper>
            <Title>Комментарий:</Title>
          </Wrapper>
          <Text>{data.text}</Text>
          {isOpenPopup && (
            <ConfirmPopup
              deleteHandler={deleteComment}
              cancelHandler={() => setIsOpenPopup(false)}
            />
          )}
        </CommentWrapper>
      </Container>
    );
  }
);
