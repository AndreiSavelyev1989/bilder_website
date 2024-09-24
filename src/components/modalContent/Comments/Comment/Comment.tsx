import { Dispatch, memo, SetStateAction, useContext, useEffect, useState } from "react";
import {
  AuthorWrapper,
  CommentWrapper,
  Container,
  EditButtonWrapper,
  EditWrapper,
  Image,
  ImageWrapper,
  Name,
  RaitingWrapper,
  Text,
  Title,
  Tooltip,
  TrashButton,
  Wrapper,
  WrapperContent,
} from "./CommentStyles";
import { CommentType } from "@assets/types/types";
import { Rating } from "@common/Rating/Rating";
import { dateFormat, isAuthorCheck } from "@assets/helpers";
import { CommentsAPI } from "@api/api";
import { UserProfileContext } from "@context/context";
import { ConfirmPopup } from "@components/common/ConfirmPopup/ConfirmPopup";
import { EditButton } from "@components/Header/UserProfile/ProfileInfo/ProfileInfoStyles";
import { useUpdateCommentModal } from "@assets/hooks";
import { createPortal } from "react-dom";

type Props = {
  data: CommentType;
  comments: CommentType[];
  getChangedComments: (comments: CommentType[]) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setServerResponse: Dispatch<SetStateAction<any>>;
  setIsCommentsUpdated: Dispatch<SetStateAction<boolean>>;
};

export const Comment = memo(
  ({
    data,
    comments,
    getChangedComments,
    setIsLoading,
    setServerResponse,
    setIsCommentsUpdated
  }: Props) => {
    const { profile } = useContext(UserProfileContext) ?? {};
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const { setIsOpen, displayModal, updatedComment } = useUpdateCommentModal(
      setServerResponse,
      data
    );

    useEffect(() => {
      if (updatedComment) {
        const updatedComments = comments.map((comment) => {
          return comment._id === updatedComment._id ? updatedComment : comment;
        })
        getChangedComments(updatedComments);
        setIsCommentsUpdated(true);
      }
    }, [updatedComment])

    const deleteComment = async () => {
      try {
        setIsLoading(true);
        const response = await CommentsAPI.deleteComment(data._id);
        const filteredComments = comments.filter(
          (comment) => comment._id !== data._id
        );
        getChangedComments(filteredComments);
        setServerResponse(response);
        setIsCommentsUpdated(true);
      } catch (err: any) {
        setServerResponse(err?.response);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <Container>
        <Wrapper>
          <ImageWrapper>
            <Image src={data.user.profile_image} alt="avatar" />
          </ImageWrapper>
          <CommentWrapper>
            <AuthorWrapper>
              <WrapperContent>
                <Title>Автор:</Title>
                <Name>{data.user.username}</Name>
              </WrapperContent>
              <RaitingWrapper>
                <Rating initialRating={data.rating} disabled />
              </RaitingWrapper>
              {profile && isAuthorCheck(profile.email, data.email) && (
                <TrashButton onClick={() => setIsOpenPopup(true)} />
              )}
            </AuthorWrapper>
            <WrapperContent>
              <Title>Дата публикации:</Title>
              <Name>{dateFormat(data.updatedAt)}</Name>
            </WrapperContent>
            <WrapperContent>
              <Title>Комментарий:</Title>
            </WrapperContent>
            <Text>{data.text}</Text>
            {isOpenPopup && (
              <ConfirmPopup
                deleteHandler={deleteComment}
                cancelHandler={() => setIsOpenPopup(false)}
              />
            )}
          </CommentWrapper>
        </Wrapper>
        {profile && isAuthorCheck(profile.email, data.email) && (
          <EditWrapper>
            <EditButtonWrapper>
              <EditButton onClick={() => setIsOpen(true)} />
              <Tooltip>Редактировать</Tooltip>
            </EditButtonWrapper>
          </EditWrapper>
        )}
        {createPortal(displayModal(), document.body)}
      </Container>
    );
  }
);
