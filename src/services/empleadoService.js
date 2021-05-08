import { URL_BACKEND } from "./../environments/environments";
import axios from "axios";

export const getEmpleado = async () => {
  const rpta = await axios.get(URL_BACKEND + "/empleado");
  return rpta;
};
export const putEmpleadoById = async (objEmpleado) => {
  const rpta = await axios.put(
    `${URL_BACKEND}/empleado/${objEmpleado.id}`,
    JSON.stringify(objEmpleado),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};
export const postEmpleado = async (objEmpleado) => {
  const rpta = await axios.post(
    `${URL_BACKEND}/empleado`,
    JSON.stringify(objEmpleado),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};
export const deleteEmpleadoById = async (id) => {
  const rpta = await axios.delete(`${URL_BACKEND}/empleado/${id}`);
  return rpta;
};
