import { createContext, useState, useEffect } from "react";

export const AvatarContext = createContext();

export default function AvatarContextProvider({ children }) {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setAvatar(`https://api.multiavatar.com/${Date.now()}.svg`);
  }, []);

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
}
