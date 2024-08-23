import { useContext, useState, MouseEvent } from "react";
import userIcon from "../../assets/images/user.svg";
import { useNavigate } from "react-router-dom";
import { GoogleContext, UserProfileContext } from "../../context/context";
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
import { AuthAPI } from "../../api/api";

export const UserProfile = () => {
  const googleContext = useContext(GoogleContext);
  const { logOut } = googleContext ?? {};
  const profileContext = useContext(UserProfileContext);
  const { profile, setProfile } = profileContext ?? {};
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  const openProfileMenu = () => {
    setIsOpen(true);
  };

  const closeProfileMenu = () => {
    !isEdit && setIsOpen(false);
  };

  const logout = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    logOut && logOut();
    AuthAPI.logout();
    setProfile && setProfile(null);
  };

  const register = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate(`${baseUrl}/register`);
  };

  const login = (e: MouseEvent<HTMLButtonElement>) => {
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
                callback={login}
                title="Вход"
                background={COLOR.grey300}
                height="30px"
              />
              <Button
                callback={register}
                title="Регистрация"
                background={COLOR.grey300}
                height="30px"
              />
            </ButtonWrapper>
          ) : (
            <ProfileInfo
              profile={profile}
              setProfile={setProfile}
              logout={logout}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
            />
          )}
        </ProfileWrapper>
      )}
    </Container>
  );
};
