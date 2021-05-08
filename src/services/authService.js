import axios from "axios";
import { URL_BACKEND_LOGIN } from "../environments/enviromentsLogin";

export const postLogin = async (objLogin) => {
  const rpta = await axios.post(
    `${URL_BACKEND_LOGIN}/login`,
    JSON.stringify(objLogin),
    {
      headers: { "Content-type": "application/json" },
    }
  );
  return rpta;
};

export const postVerificar = async (token) => {
  const rpta = await axios.post(`${URL_BACKEND_LOGIN}/verificar`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return rpta;
};
