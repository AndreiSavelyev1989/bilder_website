import { forwardRef, useCallback, memo } from "react";
import { executeScroll, scrollToTop } from "../../assets/helpers";
import {
  Container,
  Hamburger,
  HamburgerWrapper,
  List,
  ListItem,
  NavWrapper,
} from "./HeaderStyles";
import { ReferenceType } from "../../assets/types/types";

type Props = {
  setIsOpenMenu: (value: boolean) => void;
  isOpenMenu: boolean;
  reference: ReferenceType
}

export const Header = memo(
  forwardRef(({ setIsOpenMenu, isOpenMenu, reference }: Props, ref) => {
    const onClickHandler = useCallback(() => {
      setIsOpenMenu(!isOpenMenu);
    }, [isOpenMenu, setIsOpenMenu]);

    return (
      <Container>
        <HamburgerWrapper>
          <Hamburger onClick={onClickHandler} />
        </HamburgerWrapper>
        <NavWrapper>
          <List>
            <ListItem onClick={() => scrollToTop()}>Главная</ListItem>
            <ListItem onClick={() => executeScroll(reference.servicesRef)}>
              Услуги
            </ListItem>
            <ListItem onClick={() => executeScroll(reference.ourWorksRef)}>
              Галерея
            </ListItem>
            <ListItem onClick={() => executeScroll(reference.commentsRef)}>
              Отзывы
            </ListItem>
            <ListItem onClick={() => executeScroll(reference.contactsRef)}>
              Контакты
            </ListItem>
          </List>
        </NavWrapper>
      </Container>
    );
  })
);
