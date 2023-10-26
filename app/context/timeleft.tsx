"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
  timeleft: string;
  setTimeLeft: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
  timeleft: "",
  setTimeLeft: () => {},
});

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [timeleft, setTimeLeft] = useState("");

  return <GlobalContext.Provider value={{ timeleft, setTimeLeft }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = (): ContextProps => useContext(GlobalContext);
