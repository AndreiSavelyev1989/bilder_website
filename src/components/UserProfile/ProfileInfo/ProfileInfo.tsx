import { COLOR } from "./../../../assets/styles";
import { Button } from "../../common/Button/Button";
import {
  ButtonWrapper,
  CloseButton,
  Container,
  ContentWrapper,
  EditButton,
  EditButtonWrapper,
  Input,
  Textarea,
  Title,
  Tooltip,
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
import { ProfileAPI } from "../../../api/api";
import { createPortal } from "react-dom";
import { Loader } from "../../common/Loader/Loader";
import { useNotification } from "../../../assets/hooks";
import Notification from "../../Notification/Notification";

type Props = {
  profile: UserProfile;
  logout: MouseEventHandler<HTMLButtonElement>;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setProfile: Dispatch<SetStateAction<UserProfile | null>> | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const ProfileInfo = ({
  profile,
  logout,
  isEdit,
  setIsEdit,
  setProfile,
  setIsOpen,
}: Props) => {
  const [data, setData] = useState({
    username: profile.name,
    profileImageUrl: profile.picture,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [serverResponse, setServerResponse] = useState<any>(null);
  const { message, status } = useNotification(
    serverResponse && {
      status: serverResponse.status,
      text: serverResponse.data.message,
    }
  );

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
      setServerResponse(response);
      const { email, profile_image, username } = response.data.user;
      setProfile &&
        setProfile({ email, name: username, picture: profile_image });
      setIsEdit(false);
      setIsOpen(false);
    } catch (err: any) {
      setServerResponse(err?.response);
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
              <Title>URL адресс фото профиля:</Title>
              <Textarea
                name="profileImageUrl"
                value={data.profileImageUrl}
                onChange={updateData}
              />
            </WrapperItem>
          )}
        </ContentWrapper>
        <EditButtonWrapper>
          {!isEdit ? (
            <EditButton onClick={() => setIsEdit(true)} />
          ) : (
            <CloseButton onClick={() => setIsEdit(false)} />
          )}
          <Tooltip>
            {!isEdit ? "Редактировать профиль" : "Закрыть редактирование"}
          </Tooltip>
        </EditButtonWrapper>
      </Wrapper>
      <ButtonWrapper>
        {!isEdit && (
          <Button
            onMouseDown={logout}
            title="Выход"
            background={COLOR.grey300}
            width="80px"
            height="30px"
          />
        )}
        {isEdit && (
          <Button
            onMouseDown={updateProfile}
            title="Обновить"
            background={COLOR.grey300}
            width="170px"
            height="30px"
            margin="0 15px 0 0"
          />
        )}
      </ButtonWrapper>
      {createPortal(isLoading && <Loader />, document.body)}
      {createPortal(
        (status.success || status.error) && (
          <Notification
            message={message}
            isSuccess={status.success}
            isError={status.error}
          />
        ),
        document.body
      )}
    </Container>
  );
};
