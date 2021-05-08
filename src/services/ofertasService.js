import { URL_BACKEND } from "./../environments/environments";
import axios from "axios";

export const getOfertas = async () => {
  const rpta = await axios.get(URL_BACKEND + "/oferta");

  return rpta;
};
export const putOfertaById = async (objOferta) => {
  const rpta = await axios.put(
    `${URL_BACKEND}/oferta/${objOferta.id}`,
    JSON.stringify(objOferta),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};
export const postOferta = async (objOferta) => {
  const rpta = await axios.post(
    `${URL_BACKEND}/oferta`,
    JSON.stringify(objOferta),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};
export const deleteOfertaById = async (id) => {
  const rpta = await axios.delete(`${URL_BACKEND}/oferta/${id}`);
  return rpta;
};
