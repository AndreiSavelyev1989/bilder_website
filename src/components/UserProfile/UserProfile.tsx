import { useContext, useState, MouseEvent } from "react";
import userIcon from "../../assets/images/user.svg";
import { useNavigate } from "react-router-dom";
import { GoogleContext } from "../../context/context";
import { COLOR } from "../../assets/styles";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { Button } from "../common/Button/Button";
import {
  ButtonWrapper,
  Container,
  ProfileWrapper,
  Triangle,
  TriangleDown,
  TriangleUp,
  UserIcon,
  UserIconWrapper,
} from "./UserProfileStyles";
import { baseUrl } from "../../router";

export const UserProfile = () => {
  const googleContext = useContext(GoogleContext);
  const { profile, logOut } = googleContext ?? {};
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openProfileMenu = () => {
    setIsOpen(true);
  };

  const closeProfileMenu = () => {
    setIsOpen(false);
  };

  const logout = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    logOut && logOut();
  };

  const logIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate(`${baseUrl}/login`);
  };

  return (
    <Container tabIndex={0} onClick={openProfileMenu} onBlur={closeProfileMenu}>
      <UserIconWrapper>
        <UserIcon src={profile ? profile.picture : userIcon} />
        {isOpen ? <TriangleDown /> : <TriangleUp />}
      </UserIconWrapper>
      {isOpen && (
        <ProfileWrapper onClick={(e) => e.stopPropagation()}>
          <Triangle />
          {!profile ? (
            <ButtonWrapper>
              <Button
                callback={logIn}
                title="login"
                background={COLOR.grey300}
                width="80px"
                height="30px"
              />
            </ButtonWrapper>
          ) : (
            <ProfileInfo profile={profile} logout={logout} />
          )}
        </ProfileWrapper>
      )}
    </Container>
  );
};
