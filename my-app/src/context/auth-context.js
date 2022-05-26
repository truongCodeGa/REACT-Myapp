import { createContext, useContext, useState } from "react";
//Bài 193: Thực hành AuthContext phần 2
const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState({
    userId: 1,
    fullname: "NguyenTruong",
    email: "truogntx99@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1632214620124-05683c8d2a0e?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export { useAuth, AuthProvider };
