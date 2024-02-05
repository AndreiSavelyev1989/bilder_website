import React, { forwardRef, useCallback } from "react";
import { Nav } from "../Nav/Nav";
import { useMarginTop } from "../../hooks";
import { Close, CloseWrapper, Container, NavBarWrapper } from "./NavBarStyles";

export const NavBar = forwardRef(
  ({ setIsOpenMenu, isOpenMenu, reference }, ref) => {
    const onClickHandler = useCallback(function () {
      setIsOpenMenu(false);
    }, []);
    const { marginTop } = useMarginTop(onClickHandler);

    return (
      <Container isOpenMenu={isOpenMenu}>
        <NavBarWrapper>
          <CloseWrapper>
            <Close onClick={onClickHandler} />
          </CloseWrapper>
          <Nav
            reference={reference}
            onOpenMenuHandler={onClickHandler}
            marginTop={marginTop}
          />
        </NavBarWrapper>
      </Container>
    );
  }
);
