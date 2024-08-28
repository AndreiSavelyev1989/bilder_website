import { forwardRef, useContext, useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { COLOR } from "../../assets/styles";
import { Button } from "../common/Button/Button";
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
import { useCommentsModal, useCreateCommentModal } from "../../assets/hooks";
import { UserProfileContext } from "../../context/context";
import { CommentsAPI } from "../../api/api";
import { Loader } from "../common/Loader/Loader";

const Feedback = forwardRef((props, ref) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { displayModal, setIsOpen } = useCommentsModal();
  const createCommentModal = useCreateCommentModal();
  const { profile } = useContext(UserProfileContext) ?? {};

  useEffect(() => {
    requestComments();
  }, []);

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
    </Container>
  );
});

export default Feedback;
