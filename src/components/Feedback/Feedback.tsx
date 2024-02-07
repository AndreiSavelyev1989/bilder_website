import { forwardRef } from "react";
import "react-slideshow-image/dist/styles.css";
import { COLOR } from "../../assets/styles";
import { sliderComments as comments } from "../../assets/mockData";
import { Button } from "../common/Button/Button";
import { createPortal } from "react-dom";
import { CommentsSlider } from "../CommentsSlider/CommentsSlider";
import {
  ButtonWrapper,
  Container,
  RefBlock,
  SlideWrapper,
  Title,
} from "./FeedbackStyles";
import { useCommentsModal } from "../../assets/hooks";

const Feedback = forwardRef((props, ref) => {
  const { displayModal, setIsOpen } = useCommentsModal();

  const modalHandler = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <RefBlock ref={ref} />
      <Title>Отзывы наших клиентов</Title>
      <SlideWrapper>
        <CommentsSlider comments={comments} />
      </SlideWrapper>
      <ButtonWrapper>
        <Button
          title="Показать все отзывы"
          width="350px"
          hoverBackground={COLOR.grey200}
          background={COLOR.grey100}
          isShowAll
          callback={modalHandler}
        />
      </ButtonWrapper>
      {createPortal(displayModal(), document.body)}
    </Container>
  );
});

export default Feedback;
