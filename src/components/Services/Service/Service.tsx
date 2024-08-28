import { Button } from "@common/Button/Button";
import { createPortal } from "react-dom";
import {
  Container,
  DescriptionBlock,
  DescriptionBlockWrapper,
  ListItem,
  ListWrapper,
  PhotoBlock,
  Title,
  Wrapper,
} from "./ServiceStyles";
import { useOrderModal } from "@assets/hooks";

type Props = {
  title: string;
  services: { id: number; title: string }[];
  photoSrc: string;
};

export const Service = ({ title, services, photoSrc }: Props) => {
  const { displayModal, setIsOpen } = useOrderModal({ serviceTitle: title });

  return (
    <Container>
      <PhotoBlock $photoSrc={photoSrc} />
      <DescriptionBlockWrapper>
        <DescriptionBlock>
          <Wrapper>
            <Title>{title}</Title>
            <ListWrapper>
              {services.map((el) => (
                <ListItem key={el.id}>{el.title}</ListItem>
              ))}
            </ListWrapper>
          </Wrapper>
          <Button
            title={"Заказать"}
            width={"100%"}
            onClick={() => setIsOpen(true)}
          />
        </DescriptionBlock>
      </DescriptionBlockWrapper>
      {createPortal(displayModal(), document.body)}
    </Container>
  );
};
