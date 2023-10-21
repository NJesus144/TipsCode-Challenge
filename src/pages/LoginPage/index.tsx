import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { AuthContext } from "../../contexts/auth";

import { FieldValuesLogin, schemaLogin } from "../validationSchemaLogin";

import { ImageLayoutWithInputs } from "../../layout/imageLayout";
import { LinkBtn } from "./styles";

export function LoginPage() {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValuesLogin>({
    resolver: yupResolver(schemaLogin),
  });
  const onSubmit: SubmitHandler<FieldValuesLogin> = (data) => {
    login(data.email, data.password);
  };

  return (
    <ImageLayoutWithInputs>
      <h1>Entre com sua conta!</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            autoComplete="password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          Ainda não tem uma conta? <LinkBtn to="/register">Crie uma!</LinkBtn>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </ImageLayoutWithInputs>
  );
}
