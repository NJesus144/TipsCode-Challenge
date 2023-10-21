import { ReactNode, createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { api, LoginUser } from "../services/api";


interface UserContextProps {
  authenticated: boolean;
  user: null;
  loading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as UserContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoverUser = localStorage.getItem("user");

    if (recoverUser) {
      setUser(JSON.parse(recoverUser));
    }

    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await LoginUser(email, password);

    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate("/");
  };

  const logout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
