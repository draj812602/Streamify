import React, { createContext, useState, useContext } from "react";

// Create the GlobalContext
const GlobalContext = createContext();

// Custom hook to use GlobalContext
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// Global Provider Component
export const GlobalProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // You can add other global states here in the future
  // const [otherState, setOtherState] = useState("");

  return (
    <GlobalContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </GlobalContext.Provider>
  );
};
