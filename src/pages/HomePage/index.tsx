import { useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import { Container } from "./styles";

interface UserLogado {
  _id: string;
  email: string;
  password: string;
  userName: string;
}

export function HomePage() {
  const { logout, user } = useContext(AuthContext);

  const userLogagao = user as unknown as UserLogado;

  const handleLogout = () => {
    logout();
  };

  return (
    <Container>
      <div>
        <h1>Bem vindo(a) {userLogagao.userName}</h1>
        <button onClick={handleLogout}>logout</button>
      </div>
    </Container>
  );
}
