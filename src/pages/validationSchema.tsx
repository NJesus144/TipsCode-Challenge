
import * as yup from "yup";

export const schema = yup
  .object({
    userName: yup
      .string()
      .required("O usuário é obrigatório.")
      .min(4, "Usuário precisa ter no mínimo 4 caracteres."),
    email: yup
      .string()
      .email("O email deve ser válido.")
      .required("O email é obrigatório."),
    password: yup
      .string()
      .required('Senha é obrigatória.')
      .min(6, "Senha precisa ter no mínimo 6 caracteres."),
  })
  .required();

export type FieldValues = yup.InferType<typeof schema>;
