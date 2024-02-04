import React, { createContext, useState } from "react";

const ResponseContext = createContext();

const ResponseContextProvider = ({ children }) => {
  const [response, setResponse] = useState(null);

  const updateResponse = (newValue) => {
    setResponse(newValue);
  };

  return (
    <ResponseContext.Provider value={{ response, updateResponse }}>
      {children}
    </ResponseContext.Provider>
  );
};

export { ResponseContext, ResponseContextProvider };
