import { createContext, useState } from "react";

import React from "react";

export const MonaContext = createContext();
export const MonaProvider = ({ children }) => {
  const [contentMarkdown, setContentMarkdown] = useState("");

  return (
    <MonaContext.Provider
      value={{
        contentMarkdown,
        setContentMarkdown,
      }}>
      {children}
    </MonaContext.Provider>
  );
};
