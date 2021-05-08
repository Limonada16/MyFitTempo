import React, { useEffect, useState } from "react";
import ClientesContext from "./ClientesContext";
import {
  deleteClienteById,
  getClientes,
} from "./../../../services/clientesService";
import Swal from "sweetalert2";

const ClientesState = (props) => {
  const [sidebr, setSidebr] = useState("");
  const [sombr, setSombr] = useState("overlay");
  const [cargando, setCargando] = useState(true);
  const [totalCliente, setTotalCliente] = useState(0);
  const [mostrarModalCrearCliente, setMostrarModalCrearCliente] = useState(
    false
  );
  const [mostrarModalEditarCliente, setMostrarModalEditarCliente] = useState(
    false
  );
  const [objClienteEditar, setObjClienteEditar] = useState(null);
  const eliminarCliente = (id) => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar al Cliente?",
      text: "¡Los cambios serán irreversibles!",
      showCancelButton: true,
      icon: "error",
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        deleteClienteById(id).then((rpta) => {
          if (rpta.data) {
            Swal.fire({
              text: "Cliente eliminado correctamente",
              icon: "success",
              timer: 1500,
            });
            traerClientes();
          }
        });
      }
    });
  };
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: "Acciones",
        field: "accion",
      },
      {
        label: "#",
        field: "posicion",
      },
      {
        label: "DNI",
        field: "dni",
      },
      {
        label: "Primer Nombre",
        field: "primerNombre",
      },
      {
        label: "Segundo Nombre",
        field: "segundoNombre",
      },
      {
        label: "Apellido Paterno",
        field: "apellidoPaterno",
      },
      {
        label: "Apellido Materno",
        field: "apellidoMaterno",
      },
      {
        label: "Foto",
        field: "foto",
      },
      {
        label: "Correo",
        field: "correo",
      },
      {
        label: "Celular",
        field: "celular",
      },
      {
        label: "Direccion",
        field: "direccion",
      },
    ],
    rows: [],
  });
  const traerClientes = () => {
    setCargando(true);
    getClientes().then((rpta) => {
      if (rpta.data) {
        let datoFormateado = rpta.data.map((objClient, i) => {
          setTotalCliente(i + 1);
          return {
            ...objClient,
            posicion: i + 1,
            accion: (
              <>
                <button
                  className="btn btn-colorado"
                  onClick={() => {
                    eliminarCliente(objClient.id);
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
                <button
                  className="btn btn-palido ml-2"
                  onClick={() => {
                    setObjClienteEditar({ ...objClient });
                    setMostrarModalEditarCliente(true);
                  }}
                >
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </>
            ),
          };
        });
        setDatatable({ ...datatable, rows: datoFormateado });
        setCargando(false);
      }
    });
  };
  useEffect(() => {
    traerClientes();
  }, []);
  return (
    <ClientesContext.Provider
      value={{
        totalCliente: totalCliente,
        mostrarModalCrearCliente: mostrarModalCrearCliente,
        setMostrarModalCrearCliente: setMostrarModalCrearCliente,
        traerClientes: traerClientes,
        objClienteEditar: objClienteEditar,
        mostrarModalEditarCliente: mostrarModalEditarCliente,
        setMostrarModalEditarCliente: setMostrarModalEditarCliente,
        datatable: datatable,
        sidebr: sidebr,
        setSidebr: setSidebr,
        sombr: sombr,
        setSombr: setSombr,
        cargando: cargando,
        setCargando: setCargando,
      }}
    >
      {props.children}
    </ClientesContext.Provider>
  );
};

export default ClientesState;
