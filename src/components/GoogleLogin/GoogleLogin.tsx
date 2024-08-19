import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../common/Button/Button";
import { GoogleIcon } from "./GoogleLoginStyles";
import { GoogleContext } from "../../context/context";

type Props = {
  setIsLoading: any;
};

export const GoogleLogin = ({ setIsLoading }: Props) => {
  const googleContext = useContext(GoogleContext);
  const { user, profile, login, setProfile } = googleContext ?? {};

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile && setProfile(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [user]);

  if (profile) {
    return <Navigate to={"/"} />;
  }

  return (
    <Button
      callback={login}
      title="Sign in with"
      margin="20px 0 0 0"
      width="70%"
    >
      <GoogleIcon />
    </Button>
  );
};
