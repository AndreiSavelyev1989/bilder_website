import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import React, { ReactNode, createContext, useState } from "react";
import {
  EmailContextType,
  EmailType,
  GoogleContextType,
  GoogleProfileType,
  GoogleUserType,
  UserProfile,
  UserProfileContextType,
} from "./type";

const EmailContext = createContext<EmailContextType | null>(null);

const EmailContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [response, setResponse] = useState<EmailType | null>(null);

  const updateResponse = (newValue: EmailType | null) => {
    setResponse(newValue);
  };

  return (
    <EmailContext.Provider value={{ response, updateResponse }}>
      {children}
    </EmailContext.Provider>
  );
};

const GoogleContext = createContext<GoogleContextType | null>(null);

const GoogleContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<GoogleUserType | null>(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <GoogleContext.Provider value={{ user, login, logOut }}>
      {children}
    </GoogleContext.Provider>
  );
};

const UserProfileContext = createContext<UserProfileContextType | null>(null);

const UserProfileContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  return (
    <UserProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export {
  EmailContext,
  EmailContextProvider,
  GoogleContext,
  GoogleContextProvider,
  UserProfileContext,
  UserProfileContextProvider,
};
