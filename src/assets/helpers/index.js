import emailjs from "@emailjs/browser";

export const executeScroll = (ref) => ref.current.scrollIntoView();
export const scrollToTop = () => window.scrollTo({ top: 0 });

export const sendEmail = (formData, setSuccess, setError) => {
  emailjs
    .send("service_scbve5v", "template_fv7i9rw", formData, "mpmTmPw53yiw11l-a")
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
