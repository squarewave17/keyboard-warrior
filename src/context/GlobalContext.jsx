import { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState("commonWords");
  const [sound, setSound] = useState(true);

  return (
    <GlobalContext.Provider value={{ gameMode, sound, setSound }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
