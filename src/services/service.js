import axios from "axios";

const URL_BACKEND = "https://607604500baf7c0017fa7713.mockapi.io";

export const registroEmpleado = async (objEmpleado) => {
  const rpta = await axios.post(
    `${URL_BACKEND}/empleado`,
    JSON.stringify(objEmpleado),
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  );
  return rpta;
};



export default registroEmpleado;