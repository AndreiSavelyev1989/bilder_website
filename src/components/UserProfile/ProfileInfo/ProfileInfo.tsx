import { COLOR } from "./../../../assets/styles";
import { Button } from "../../common/Button/Button";
import {
  ButtonWrapper,
  Container,
  ContentWrapper,
  EditButton,
  Input,
  Textarea,
  Title,
  Wrapper,
  WrapperItem,
} from "./ProfileInfoStyles";
import {
  ChangeEvent,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";
import { UserProfile } from "../../../context/type";
import { AuthAPI, ProfileAPI } from "../../../api/api";
import { createPortal } from "react-dom";
import { Loader } from "../../common/Loader/Loader";

type Props = {
  profile: UserProfile;
  logout: MouseEventHandler<HTMLButtonElement>;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setProfile: Dispatch<SetStateAction<UserProfile | null>> | undefined;
};

export const ProfileInfo = ({
  profile,
  logout,
  isEdit,
  setIsEdit,
  setProfile,
}: Props) => {
  const [data, setData] = useState({
    username: profile.name,
    profileImageUrl: profile.picture,
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateData = (
    event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const property = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [property]: value }));
  };

  const updateProfile = async () => {
    try {
      setIsLoading(true);
      const response = await ProfileAPI.updateProfile({
        username: data.username,
        profile_image: data.profileImageUrl,
      });
      const { email, profile_image, username } = response.data.user;
      setProfile &&
        setProfile({ email, name: username, picture: profile_image });
      setIsEdit(false);
    } catch (err) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <WrapperItem>
            <Title>Имя пользователя:</Title>
            {isEdit ? (
              <Input
                name="username"
                value={data.username}
                onChange={updateData}
              />
            ) : (
              <div>{profile.name}</div>
            )}
          </WrapperItem>
          {!isEdit && (
            <WrapperItem>
              <Title>Е-мейл:</Title>
              <div>{profile.email}</div>
            </WrapperItem>
          )}
          {isEdit && (
            <WrapperItem>
              <Title>Фото адресс:</Title>
              <Textarea
                name="profileImageUrl"
                value={data.profileImageUrl}
                onChange={updateData}
              />
            </WrapperItem>
          )}
        </ContentWrapper>
        <EditButton onClick={() => setIsEdit(!isEdit)} />
      </Wrapper>
      <ButtonWrapper>
        {!isEdit && (
          <Button
            callback={logout}
            title="Выход"
            background={COLOR.grey300}
            width="80px"
            height="30px"
          />
        )}
        {isEdit && (
          <Button
            callback={updateProfile}
            title="Обновить профиль"
            background={COLOR.grey300}
            width="180px"
            height="30px"
          />
        )}
      </ButtonWrapper>
      {createPortal(isLoading && <Loader />, document.body)}
    </Container>
  );
};
