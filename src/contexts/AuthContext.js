import { createContext, useContext, useState } from "react";
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "../utils/firebase";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth , (currentUser)=>{
    setUser(currentUser)
  })
  const contextValue = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};