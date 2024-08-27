export type ReferenceType = {
  servicesRef: React.MutableRefObject<null>;
  ourWorksRef: React.MutableRefObject<null>;
  commentsRef: React.MutableRefObject<null>;
  contactsRef: React.MutableRefObject<null>;
};

export type CommentType = {
  _id: string;
  email: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  rating: number;
  user: {
    profile_image: string;
    username: string;
  };
};
