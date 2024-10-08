import { Dispatch, SetStateAction } from "react";

export type EmailType = {
  status: number;
  text: string;
};

export interface EmailContextType {
  response: EmailType | null;
  updateResponse: (value: EmailType | null) => void;
}

export type GoogleUserType = {
  access_token: string;
  authuser?: string;
  expires_in: number;
  prompt: string;
  scope: string;
  token_type: string;
};
export interface GoogleContextType {
  user: GoogleUserType | null;
  login: () => void;
  logOut: () => void;
}

export type UserProfile = {
  name: string;
  email: string;
  picture: string;
};

export interface UserProfileContextType {
  profile: UserProfile | null;
  setProfile: Dispatch<SetStateAction<UserProfile | null>>;
}
