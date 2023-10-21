import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { RegisterUser } from "../../services/api";
import { ImageLayoutWithInputs } from "../../layout/imageLayout";

import { FieldValues, schema } from "../validationSchema";
import { LinkBtn } from "./styles";

export function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const response = await RegisterUser(
      data.userName,
      data.email,
      data.password
    );

    if (response.status === 201) {
      return navigate("/login");
    }
  };

  return (
    <ImageLayoutWithInputs>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userName">Nome de usuário</label>
          <input
            type="text"
            id="userName"
            autoComplete="username"
            {...register("userName")}
          />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        <div>
          <label htmlFor="userName">E-mail</label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="userName">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          Já possui uma conta? <LinkBtn to="/login">Faça seu login!</LinkBtn>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </ImageLayoutWithInputs>
  );
}
