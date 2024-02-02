import emailjs from "@emailjs/browser";

export const executeScroll = (ref) => ref.current.scrollIntoView();
export const scrollToTop = () => window.scrollTo({ top: 0 });

export const sendEmail = (formData) => {
  return new Promise((resolve, reject) => {
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
