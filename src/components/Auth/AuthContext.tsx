import { createContext, useContext, useState } from "react";

type ContextType = {
  isLogged: boolean;
  toggle: () => void;
  logIn: () => void;
  logOut: () => void;
};

const AuthContext = createContext<ContextType | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error("Oh no! Component should be placed inside AuthProvider");
};

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const toggle = () => setIsLogged((value) => !value);
  const logIn = () => setIsLogged(true);
  const logOut = () => setIsLogged(false);

  return { isLogged, toggle, logIn, logOut };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
  );
};
