import axios from "axios";

const URL_BACKEND = "https://607604500baf7c0017fa7713.mockapi.io";

export const getEmpleado = async () => {
    const rpta = await axios.get(`${URL_BACKEND}/empleado`);
    return rpta;
};

export const putDatosById = async (objDatos) => {
    const rpta = await axios.put(
        `${URL_BACKEND}/empleado/${objDatos.id}`,
        JSON.stringify(objDatos),
        {
            headers: {
                "Content-type": "application/json"
            }
        }
    );
    return rpta;
};
export const getEmpleadoById = async (id) => {
    const rpta = await axios.get(`${URL_BACKEND}/empleado/${id}`);
    return rpta;
};
export const getClientes = async () => {
    const rpta = await axios.get(`${URL_BACKEND}/cliente`);
    return rpta;
};
export const getClienteById = async (id) => {
    const rpta = await axios.get(`${URL_BACKEND}/cliente/${id}`);
    return rpta;
};
