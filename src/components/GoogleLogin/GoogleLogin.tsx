import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "../common/Button/Button";
import { GoogleIcon, Wrapper } from "./GoogleLoginStyles";
import { GoogleContext, UserProfileContext } from "../../context/context";
import { baseUrl } from "../../router";
import { AuthAPI } from "./../../api/api";

type Props = {
  setIsLoading: any;
};

export const GoogleLogin = ({ setIsLoading }: Props) => {
  const googleContext = useContext(GoogleContext);
  const { user, login } = googleContext ?? {};
  const profileContext = useContext(UserProfileContext);
  const { profile, setProfile } = profileContext ?? {};

  useEffect(() => {
    if (user) {
      loginGoogleUser(user);
    }
  }, [user]);

  const loginGoogleUser = async (user: any) => {
    try {
      setIsLoading(true);
      const response = await AuthAPI.googleLogin(user);
      const { email, username, profile_image } = response.data.user;
      setProfile &&
        setProfile({ email, name: username, picture: profile_image });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (profile) {
    return <Navigate to={`${baseUrl}`} />;
  }

  return (
    <Wrapper>
      <Button onClick={login} title="Sign in with" margin="20px 0 0 0">
        <GoogleIcon />
      </Button>
    </Wrapper>
  );
};
