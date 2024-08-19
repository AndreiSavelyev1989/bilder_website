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

export type GoogleProfileType = {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  name: string;
  picture: string;
  verified_email: string | boolean;
};

export interface GoogleContextType {
  user: GoogleUserType | null;
  profile: GoogleProfileType | null;
  login: () => void;
  logOut: () => void;
  setProfile: Dispatch<SetStateAction<GoogleProfileType | null>>;
}