import { createContext, useState } from "react";

export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLoginState = () => setIsLoggedIn((prevState) => !prevState);
  return (
    <AuthContex.Provider value={{ isLoggedIn, toggleLoginState }}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
