'use client';

import { createContext, useContext, useState, type ReactNode } from "react";

type LogContextType = {
  add: any[];
  setAdd: React.Dispatch<React.SetStateAction<any[]>>;
  save: any[];
  setSave: React.Dispatch<React.SetStateAction<any[]>>;
};

const LogContext = createContext<LogContextType | undefined>(undefined);

export const useLogContext = () => {
  const context = useContext(LogContext);

  if (!context) {
    throw new Error("useLogContext must be used inside a LogProvider");
  }

  return context;
};

const LogProvider = ({ children }: { children: ReactNode }) => {
  const [add, setAdd] = useState<any[]>([]);
  const [save, setSave] = useState<any[]>([]);

  const sharedData: LogContextType = {
    add,
    setAdd,
    save,
    setSave,
  };

  return <LogContext.Provider value={sharedData}>{children}</LogContext.Provider>;
};

export default LogProvider;