import emailjs from "@emailjs/browser";
import { FieldError } from "react-hook-form";
import styled from "styled-components";
import { COLOR } from "../styles";
import moment from "moment";

export const executeScroll = (ref: any) => ref.current.scrollIntoView();
export const scrollToTop = () => window.scrollTo({ top: 0 });

export const sendEmail = (formData: any) => {
  return new Promise((resolve, reject) => {
    if (
      !process.env.REACT_APP_SERVICE_ID ||
      !process.env.REACT_APP_TEMPLATE_ID ||
      !process.env.REACT_APP_USER_ID
    ) {
      reject("One or more environment variables are not defined");
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          resolve(result);
        },
        (error) => {
          console.log(error.text);
          reject(error);
        }
      );
  });
};

const Error = styled.p<{ isVisible: FieldError }>`
  height: 10px;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  margin: 3px 0;
  color: ${COLOR.red};
`;

export const renderError = (
  isError: FieldError | undefined,
  errorMsg: string | undefined
) => {
  if (isError) {
    return <Error isVisible={isError}>{errorMsg}</Error>;
  }
  return null;
};

export const dateFormat = (dateString: string) => {
  const date = moment(dateString);
  return date.format("DD/MM/YYYY HH:mm:ss");
};
