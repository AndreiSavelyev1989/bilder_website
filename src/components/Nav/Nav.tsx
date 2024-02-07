import { forwardRef, useCallback } from "react";
import { executeScroll, scrollToTop } from "../../assets/helpers";
import { List, ListItem } from "./NavStyles";
import { ReferenceType } from "../../assets/types/types";


type Props = {
  onOpenMenuHandler: () => void;
  marginTop: number;
  reference: ReferenceType;
};

export const Nav = forwardRef(
  ({ onOpenMenuHandler, reference, marginTop }: Props, ref) => {
    const onClickHandler = useCallback(
      (ref: ReferenceType[keyof ReferenceType]) => {
        onOpenMenuHandler();
        executeScroll(ref);
      },
      [onOpenMenuHandler]
    );

    const onMainBlockNavHandler = useCallback(() => {
      scrollToTop();
      onOpenMenuHandler();
    }, [onOpenMenuHandler]);

    return (
      <List $marginTop={marginTop}>
        <ListItem onClick={onMainBlockNavHandler}>Главная</ListItem>
        <ListItem onClick={() => onClickHandler(reference.servicesRef)}>
          Услуги
        </ListItem>
        <ListItem onClick={() => onClickHandler(reference.ourWorksRef)}>
          Галерея
        </ListItem>
        <ListItem onClick={() => onClickHandler(reference.commentsRef)}>
          Отзывы
        </ListItem>
        <ListItem onClick={() => onClickHandler(reference.contactsRef)}>
          Контакты
        </ListItem>
      </List>
    );
  }
);
