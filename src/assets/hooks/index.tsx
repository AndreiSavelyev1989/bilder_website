import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Modal } from "../../components/common/Modal/Modal";
import { Form } from "../../components/common/Form/Form";
import { PersonalData } from "../../components/modalContent/PersonalData/PersonalData";
import { Galleries } from "../../components/modalContent/Galleries/Galleries";
import { Comments } from "../../components/modalContent/Comments/Comments";
import { ImagePreview } from "../../components/modalContent/ImagePreview/ImagePreview";
import { NewComment } from "../../components/modalContent/NewComment/NewComment";
import { CommentType } from "@assets/types/types";

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

export const useOrderModal = (data?: { [key: string]: string }) => {
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
        externalData={data}
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
        height: "auto",
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
  const [isCommentsUpdated, setIsCommentsUpdated] = useState(false);

  const displayCommentsModal = () => {
    return displayModal(
      {
        width: "50%",
        height: "80%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      },
      <Comments setIsCommentsUpdated={setIsCommentsUpdated} />
    );
  };

  return {
    displayModal: displayCommentsModal,
    setIsOpen,
    isCommentsUpdated
  };
};
export const useCreateCommentModal = (
  setServerResponse: Dispatch<SetStateAction<any>>
) => {
  const { displayModal, setIsOpen } = useModal(false);

  const displayCreateCommentModal = () => {
    return displayModal(
      {
        width: "40%",
        height: "auto",
      },
      <NewComment
        setIsModal={setIsOpen}
        setServerResponse={setServerResponse}
      />
    );
  };

  return {
    displayModal: displayCreateCommentModal,
    setIsOpen,

  };
};
export const useUpdateCommentModal = (
  setServerResponse: Dispatch<SetStateAction<any>>,
  data: CommentType
) => {
  const { displayModal, setIsOpen } = useModal(false);
  const [updatedComment, setUpdatedComment] = useState<CommentType | null>(null);

  const displayUpdateCommentModal = () => {
    return displayModal(
      {
        width: "40%",
        height: "auto",
      },
      <NewComment
        setIsModal={setIsOpen}
        setServerResponse={setServerResponse}
        setUpdatedComment={setUpdatedComment}
        data={data}
        isEdit
      />
    );
  };

  return {
    displayModal: displayUpdateCommentModal,
    setIsOpen,
    updatedComment
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
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [status]);

  useEffect(() => {
    if (response) {
      const isSuccess = response.status >= 200 && response.status < 300;
      if (status.success !== isSuccess || status.error === isSuccess) {
        setStatus({ success: isSuccess, error: !isSuccess });
        setMessage(
          isSuccess
            ? `Успешно выполнено! ${response.text}`
            : `Произошла ошибка: ${response.text}`
        );
      }
    }
  }, [response?.status]);

  return {
    status,
    message,
  };
};
