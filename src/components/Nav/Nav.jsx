import React, { forwardRef, useCallback } from "react";
import { executeScroll, scrollToTop } from "./../../assets/helpers";
import { List, ListItem } from "./NavStyles";

export const Nav = forwardRef(
  ({ onOpenMenuHandler, reference, marginTop }, ref) => {
    const onClickHandler = useCallback((ref) => {
      onOpenMenuHandler();
      executeScroll(ref);
    }, []);

    const onMainBlockNavHandler = useCallback(() => {
      scrollToTop();
      onOpenMenuHandler();
    }, []);

    return (
      <List marginTop={marginTop}>
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
