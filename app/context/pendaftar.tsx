"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
  timeleft: number;
  setTimeLeft: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps>({
  timeleft: 0,
  setTimeLeft: () => {},
});

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [timeleft, setTimeLeft] = useState(80);

  return <GlobalContext.Provider value={{ timeleft, setTimeLeft }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = (): ContextProps => useContext(GlobalContext);
