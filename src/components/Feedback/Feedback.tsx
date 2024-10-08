import { forwardRef, useContext, useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { COLOR } from "@assets/styles";
import { Button } from "@common/Button/Button";
import { createPortal } from "react-dom";
import { CommentsSlider } from "./CommentsSlider/CommentsSlider";
import {
  ButtonWrapper,
  Container,
  CreateCommentButton,
  CreateCommentButtonWrapper,
  CreateCommentWrapper,
  RefBlock,
  SlideWrapper,
  Title,
  Tooltip,
} from "./FeedbackStyles";
import {
  useCommentsModal,
  useCreateCommentModal,
  useNotification,
} from "@assets/hooks";
import { UserProfileContext } from "@context/context";
import { CommentsAPI } from "@api/api";
import { Loader } from "@common/Loader/Loader";
import Notification from "@common/Notification/Notification";
import { CommentType } from "@assets/types/types";

const Feedback = forwardRef((props, ref) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { displayModal, setIsOpen, isCommentsUpdated } = useCommentsModal();
  const { profile } = useContext(UserProfileContext) ?? {};
  const [serverResponse, setServerResponse] = useState<any>(null);
  const createCommentModal = useCreateCommentModal(setServerResponse);
  const { message, status } = useNotification(
    serverResponse && {
      status: serverResponse.status,
      text: serverResponse.data.message,
    }
  );

  useEffect(() => {
    requestComments();
  }, [isCommentsUpdated]);

  useEffect(() => {
    status && setServerResponse(null);
  }, [status]);

  const requestComments = async () => {
    try {
      setIsLoading(true);
      const response = await CommentsAPI.getComments({ page: 1, pageSize: 10 });
      setComments(response.data.comments);
    } catch (err: any) {
      console.log({ err });
    } finally {
      setIsLoading(false);
    }
  };

  const modalHandler = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <RefBlock ref={ref} />
      <Title>Отзывы наших клиентов</Title>
      {profile && (
        <CreateCommentWrapper>
          <CreateCommentButtonWrapper>
            <CreateCommentButton
              onClick={() => createCommentModal.setIsOpen(true)}
            />
            <Tooltip>Написать отзыв</Tooltip>
          </CreateCommentButtonWrapper>
        </CreateCommentWrapper>
      )}
      <SlideWrapper>
        {comments.length > 0 && <CommentsSlider comments={comments} />}
      </SlideWrapper>
      <ButtonWrapper>
        <Button
          title="Показать все отзывы"
          width="350px"
          hoverBackground={COLOR.grey200}
          background={COLOR.grey100}
          margin="20px 0 0 0"
          isShowAll
          onClick={modalHandler}
        />
      </ButtonWrapper>
      {createPortal(displayModal(), document.body)}
      {createPortal(createCommentModal.displayModal(), document.body)}
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
});

export default Feedback;
