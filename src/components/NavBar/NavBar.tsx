import { forwardRef, useCallback } from "react";
import { Nav } from "../Nav/Nav";
import { Close, CloseWrapper, Container, NavBarWrapper } from "./NavBarStyles";
import { ReferenceType } from "../../assets/types/types";
import { useMarginTop } from "../../assets/hooks";

type Props = {
  setIsOpenMenu: (value: boolean) => void;
  isOpenMenu: boolean;
  reference: ReferenceType;
};

const NavBar = forwardRef(
  ({ setIsOpenMenu, isOpenMenu, reference }: Props, ref) => {
    const onClickHandler = useCallback(
      function () {
        setIsOpenMenu(false);
      },
      [setIsOpenMenu]
    );
    const { marginTop } = useMarginTop(onClickHandler);

    return (
      <Container $isOpenMenu={isOpenMenu}>
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

export default NavBar;
