import { URL_BACKEND } from "./../environments/environments";
import axios from "axios";

export const getCarrito = async () => {
  const rpta = await axios.get(URL_BACKEND + "/carrito");
  return rpta;
};
export const getCarritoById = async (x) => {
  const rpta = await axios.get(`${URL_BACKEND}/carrito/${x}`);
  return rpta;
};
export const putCarritoById = async (objCarrito) => {
  const rpta = await axios.put(
    `${URL_BACKEND}/carrito/${objCarrito.id}`,
    JSON.stringify(objCarrito),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};
export const postCarrito = async (objCarrito) => {
  const rpta = await axios.post(
    `${URL_BACKEND}/carrito`,
    JSON.stringify(objCarrito),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};
export const deleteCarritoById = async (id) => {
  const rpta = await axios.delete(`${URL_BACKEND}/Carrito/${id}`);
  return rpta;
};
