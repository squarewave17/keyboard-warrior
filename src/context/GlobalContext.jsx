import { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState("alphabet");
  const [sound, setSound] = useState(false);

  return (
    <GlobalContext.Provider value={{ gameMode, sound, setSound }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
