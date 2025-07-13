import { createContext, useState, useContext } from "react";
export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const emptyInput = {
  name: "",
  email: "",
  year: "",
  company: "",
  linkedin: "",
  file: "",
  type: "",
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("admins")) || null);
  const [input, setInput] = useState(emptyInput);

  return (<AuthContext.Provider value = {{ authUser, setAuthUser, input, setInput }}>
    {children}
  </AuthContext.Provider>);
};