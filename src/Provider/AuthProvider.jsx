import React, { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const AuthData = {
    name: "wasef",
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
