import emailjs from "@emailjs/browser";

export const executeScroll = (ref) => ref.current.scrollIntoView();
export const scrollToTop = () => window.scrollTo({ top: 0 });

export const sendEmail = (formData, setSuccess, setError) => {
  emailjs
    .send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_USER_ID
    )
    .then(
      (result) => {
        setSuccess(true);
        console.log(result.text);
      },
      (error) => {
        setError(true);
        console.log(error.text);
      }
    );
};
