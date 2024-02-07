import { memo } from "react";
import { Form } from "../Form/Form";
import { OrderDetail } from "../OrderDetail/OrderDetail";
import {
  Container,
  Details,
  DetailsWrapper,
  FormWrapper,
  Title,
} from "./OrderStyles";

const Order = memo(() => {
  return (
    <Container>
      <DetailsWrapper>
        <Title>Закажите смету объекта прямо сейчас</Title>
        <Details>
          <OrderDetail title={"Впишите имя и номер телефона в форму"} />
          <OrderDetail
            title={"Мы связываемся с вами, чтобы обсудить условия"}
          />
          <OrderDetail
            title={"Специалист замеряет все данные и составляет смету"}
          />
          <OrderDetail
            title={"Вы подписываете договор - а мы берёмся за дело!"}
          />
        </Details>
      </DetailsWrapper>
      <FormWrapper>
        <Form />
      </FormWrapper>
    </Container>
  );
});

export default Order;
