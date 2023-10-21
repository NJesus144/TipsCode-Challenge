import * as yup from "yup";

export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .email("O email deve ser válido.")
      .required("O email é obrigatório."),
    password: yup
      .string()
      .required("Senha é obrigatória.")
      .min(6, "Senha precisa ter no mínimo 6 caracteres."),
  })
  .required();

export type FieldValuesLogin = yup.InferType<typeof schemaLogin>;
