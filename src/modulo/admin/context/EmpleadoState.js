import React, { useEffect, useState } from "react";
import EmpleadoContext from "./EmpleadoContext";
import {
  deleteEmpleadoById,
  getEmpleado,
} from "./../../../services/empleadoService";
import Swal from "sweetalert2";

const EmpleadoState = (props) => {
  const [sidebr, setSidebr] = useState("");
  const [sombr, setSombr] = useState("overlay");
  const [cargando, setCargando] = useState(true);
  const [totalEmpleados, setTotalEmpleados] = useState(0);
  const [mostrarModalCrearEmpleado, setMostrarModalCrearEmpleado] = useState(
    false
  );
  const [mostrarModalEditarEmpleado, setMostrarModalEditarEmpleado] = useState(
    false
  );
  const [objEmpleadoEditar, setObjEmpleadoEditar] = useState(null);
  const eliminarEmpleado = (id) => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar al Empleado?",
      text: "¡Los cambios serán irreversibles!",
      showCancelButton: true,
      icon: "error",
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        deleteEmpleadoById(id).then((rpta) => {
          if (rpta.data) {
            Swal.fire({
              text: "Empleado eliminado correctamente",
              icon: "success",
              timer: 1500,
            });
            traerEmpleado();
          }
        });
      }
    });
  };
  const [datatableEmpleado, setDatatableEmpleado] = useState({
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
        label: "Contraseña",
        field: "contrasena",
      },
      {
        label: "Profesion",
        field: "profesion",
      },
      {
        label: "LinkFoto",
        field: "linkFoto",
      },
      {
        label: "Descripcion",
        field: "descripcion",
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
      {
        label: "Distrito",
        field: "distrito",
      },
    ],
    rows: [],
  });
  const traerEmpleado = () => {
    getEmpleado().then((rpta) => {
      if (rpta.data) {
        let datoFormateado = rpta.data.map((objEmpleado, i) => {
          setTotalEmpleados(i + 1);
          return {
            ...objEmpleado,
            posicion: i + 1,
            accion: (
              <>
                <button
                  className="btn btn-colorado"
                  onClick={() => {
                    eliminarEmpleado(objEmpleado.id);
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
                <button
                  className="btn btn-palido ml-2"
                  onClick={() => {
                    setObjEmpleadoEditar({ ...objEmpleado });
                    setMostrarModalEditarEmpleado(true);
                  }}
                >
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </>
            ),
          };
        });
        setDatatableEmpleado({ ...datatableEmpleado, rows: datoFormateado });
        setCargando(false);
      }
    });
  };
  useEffect(() => {
    traerEmpleado();
  }, []);
  return (
    <EmpleadoContext.Provider
      value={{
        totalEmpleados: totalEmpleados,
        traerEmpleado: traerEmpleado,
        objEmpleadoEditar: objEmpleadoEditar,
        setObjEmpleadoEditar: setObjEmpleadoEditar,
        mostrarModalEditarEmpleado: mostrarModalEditarEmpleado,
        setMostrarModalEditarEmpleado: setMostrarModalEditarEmpleado,
        mostrarModalCrearEmpleado: mostrarModalCrearEmpleado,
        setMostrarModalCrearEmpleado: setMostrarModalCrearEmpleado,
        datatableEmpleado: datatableEmpleado,
        sidebr: sidebr,
        setSidebr: setSidebr,
        sombr: sombr,
        setSombr: setSombr,
        cargando: cargando,
        setCargando: setCargando,
      }}
    >
      {props.children}
    </EmpleadoContext.Provider>
  );
};

export default EmpleadoState;
