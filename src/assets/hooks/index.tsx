import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Modal } from "../../components/common/Modal/Modal";
import { Form } from "../../components/Form/Form";
import { PersonalData } from "../../components/PersonalData/PersonalData";
import { Galleries } from "../../components/Galleries/Galleries";
import { Comments } from "../../components/Comments/Comments";
import { ImagePreview } from "../../components/ImagePreview/ImagePreview";

export const useScrollYPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export const useMarginTop = (callback: () => void) => {
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      callback();
      setMarginTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);

  return {
    marginTop,
  };
};

export const useScrollVisibility = (
  targetElement: HTMLElement,
  condition: boolean
) => {
  useEffect(() => {
    if (condition) {
      targetElement.style.overflow = "hidden";
    }

    return () => {
      targetElement.style.overflow = "visible";
    };
  }, [condition, targetElement]);
};

const useModal = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const displayModal = (props: any, children: any) => {
    return (
      <>
        {isOpen && (
          <Modal isOpenModal={isOpen} setIsOpenModal={setIsOpen} {...props}>
            {children}
          </Modal>
        )}
      </>
    );
  };

  return {
    displayModal,
    setIsOpen,
  };
};

export const useOrderModal = () => {
  const { displayModal, setIsOpen } = useModal(false);

  const displayOrderModal = () => {
    return displayModal(
      {
        width: "35%",
        height: "auto",
      },
      <Form
        width={"100%"}
        height={"100%"}
        isModal={true}
        setIsOpenModal={setIsOpen}
      />
    );
  };

  return {
    displayModal: displayOrderModal,
    setIsOpen,
  };
};

export const usePersonalDataModal = () => {
  const { displayModal, setIsOpen } = useModal(false);

  const displayPersonalDataModal = () => {
    return displayModal(
      {
        width: "90%",
        height: "85%",
        isShowPersonalData: true,
      },
      <PersonalData />
    );
  };

  return {
    displayModal: displayPersonalDataModal,
    setIsOpen,
  };
};

export const useGalleryModal = () => {
  const { displayModal, setIsOpen } = useModal(false);

  const displayGalleryModal = () => {
    return displayModal(
      {
        height: "95%",
        width: "90%",
      },
      <Galleries />
    );
  };

  return {
    displayModal: displayGalleryModal,
    setIsOpen,
  };
};

export const useCommentsModal = () => {
  const { displayModal, setIsOpen } = useModal(false);

  const displayCommentsModal = () => {
    return displayModal(
      {
        width: "50%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      },
      <Comments />
    );
  };

  return {
    displayModal: displayCommentsModal,
    setIsOpen,
  };
};

export const useImagePreview = () => {
  const [isImagePreview, setIsImagePreview] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const onImagePreviewClick = (event: any) => {
    setImagePreviewUrl(event.target.src);
    setIsImagePreview(true);
  };

  const displayImagePreview = () => {
    return (
      <>
        {isImagePreview && (
          <ImagePreview
            setIsImagePreview={setIsImagePreview}
            imagePreviewUrl={imagePreviewUrl}
          />
        )}
      </>
    );
  };

  return {
    displayImagePreview,
    onImagePreviewClick,
  };
};

export const useNotification = (
  response: { status: number; text: string } | null
) => {
  const [status, setStatus] = useState({
    success: false,
    error: false,
  });
  const [message, setMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    let timeoutId: any;
    if (status.success) {
      timeoutId = setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 3000);
    }
    if (status.error) {
      timeoutId = setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: false }));
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [status]);

  useEffect(() => {
    if (response) {
      if (response.status >= 200 && response.status < 300) {
        setStatus((prev) => ({ ...prev, success: true }));
        setMessage("Отправлено успешно!");
      } else {
        setStatus((prev) => ({ ...prev, error: true }));
        setMessage(`Произошла ошибка: ${response.text}`);
      }
    }
  }, [response]);

  useEffect(() => {
    setStatus({ success: false, error: false });
  }, [location.pathname]);

  return {
    status,
    message,
  };
};
