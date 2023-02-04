import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hi">{children}</AppContext.Provider>;
};
// Custom Hook!
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
