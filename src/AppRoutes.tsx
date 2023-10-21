import { ReactNode, useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

import { AuthContext } from "./contexts/auth";
import { LoginPage } from "./pages/LoginPage";
import { Register } from "./pages/Register";

interface AppRoutesProps {
  children: ReactNode;
}

export function AppRoutes() {
  const Private = ({ children }: AppRoutesProps) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div>Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <Private>
            <HomePage />
          </Private>
        }
      />
    </Routes>
  );
}
