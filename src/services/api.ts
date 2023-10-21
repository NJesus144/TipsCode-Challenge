import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const RegisterUser = async ( userName: string, email: string, password: string) => {
  return api.post("/signup", { userName, email, password });
};

export const LoginUser = async ( email: string, password: string) => {
  return api.post("/login", { email, password });
};
