import React, { useState } from "react";

const AppContext = React.createContext();
const useAppContext = () => {};

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hi">{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
