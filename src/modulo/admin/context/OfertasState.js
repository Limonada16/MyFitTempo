import React, { useEffect, useState } from "react";
import OfertasContext from "./ofertaContext";
import {
  deleteOfertaById,
  getOfertas,
} from "./../../../services/ofertasService";
import Swal from "sweetalert2";

const OfertasState = (props) => {
  const [sidebr, setSidebr] = useState("");
  const [sombr, setSombr] = useState("overlay");
  const [cargando, setCargando] = useState(true);
  const [totalOfertas, setTotalOfertas] = useState(0);
  const [mostrarModalCrearOferta, setMostrarModalCrearOferta] = useState(false);
  const [mostrarModalEditarOferta, setMostrarModalEditarOferta] = useState(
    false
  );
  const [objOfertaEditar, setObjOfertaEditar] = useState(null);
  const eliminarOferta = (id) => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar la Oferta?",
      text: "¡Los cambios serán irreversibles!",
      showCancelButton: true,
      icon: "error",
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        deleteOfertaById(id).then((rpta) => {
          if (rpta.data) {
            Swal.fire({
              text: "Oferta eliminada correctamente",
              icon: "success",
              timer: 1500,
            });
            traerOferta();
          }
        });
      }
    });
  };
  const [datatableOfertas, setDatatableOfertas] = useState({
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
        label: "Dni Empleado",
        field: "dniEmpleado",
      },
      {
        label: "Día de Oferta",
        field: "diaDeOferta",
      },
      {
        label: "Hora de Inicio",
        field: "horaDeInicio",
      },
      {
        label: "Costo",
        field: "costo",
      },
    ],
    rows: [],
  });
  const traerOferta = () => {
    getOfertas().then((rpta) => {
      if (rpta.data) {
        let datoFormateado = rpta.data.map((objOfertas, i) => {
          setTotalOfertas(i + 1);
          return {
            ...objOfertas,
            posicion: i + 1,
            accion: (
              <>
                <button
                  className="btn btn-colorado"
                  onClick={() => {
                    eliminarOferta(objOfertas.id);
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
                <button
                  className="btn btn-palido ml-2"
                  onClick={() => {
                    setObjOfertaEditar({ ...objOfertas });
                    setMostrarModalEditarOferta(true);
                  }}
                >
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </>
            ),
          };
        });
        setDatatableOfertas({ ...datatableOfertas, rows: datoFormateado });
        setCargando(false);
      }
    });
  };
  useEffect(() => {
    traerOferta();
  }, []);
  return (
    <OfertasContext.Provider
      value={{
      totalOfertas: totalOfertas,
        traerOferta: traerOferta,
        objOfertaEditar: objOfertaEditar,
        setObjOfertaEditar: setObjOfertaEditar,
        mostrarModalEditarOferta: mostrarModalEditarOferta,
        setMostrarModalEditarOferta: setMostrarModalEditarOferta,
        mostrarModalCrearOferta: mostrarModalCrearOferta,
        setMostrarModalCrearOferta: setMostrarModalCrearOferta,
        datatableOfertas: datatableOfertas,
        sidebr: sidebr,
        setSidebr: setSidebr,
        sombr: sombr,
        setSombr: setSombr,
        cargando: cargando,
        setCargando: setCargando,
      }}
    >
      {props.children}
    </OfertasContext.Provider>
  );
};

export default OfertasState;
