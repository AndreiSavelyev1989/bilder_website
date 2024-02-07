import React, { ReactNode, createContext, useState } from "react";

type ResponseType = {
  status: number;
  text: string;
};

interface ResponseContextType {
  response: ResponseType | null;
  updateResponse: (value: ResponseType | null) => void;
}

const ResponseContext = createContext<ResponseContextType | null>(null);

const ResponseContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [response, setResponse] = useState<ResponseType | null>(null);

  const updateResponse = (newValue: ResponseType | null) => {
    setResponse(newValue);
  };

  return (
    <ResponseContext.Provider value={{ response, updateResponse }}>
      {children}
    </ResponseContext.Provider>
  );
};

export { ResponseContext, ResponseContextProvider };
