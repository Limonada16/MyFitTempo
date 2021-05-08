import React, { useEffect, useState } from "react";
import { putOfertaById } from "../../../services/ofertasService";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import Swal from "sweetalert2";
import { getEmpleado } from "../../../services/empleadoService";

const AdminModalEditOferta = ({
  mostrarModalEditarOferta,
  setMostrarModalEditarOferta,
  objOfertaEditar,
  traerOferta,
}) => {
  const [objEmpleado, setObjEmpleado] = useState([]);
  useEffect(() => {
    getEmpleado().then((respuesta) => {
      setObjEmpleado(respuesta.data);
    });
  }, []);

  const [formulario, setFormulario] = useState(objOfertaEditar);
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setFormulario({ ...objOfertaEditar });
  }, [objOfertaEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    putOfertaById(formulario).then((rpta) => {
      if (rpta.data) {
        setMostrarModalEditarOferta(false);
        Swal.fire({
          text: "Oferta editada correctamente",
          icon: "success",
          timer: 2000,
        });
        traerOferta();
      }
    });
  };
  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalEditarOferta}
        toggle={() => setMostrarModalEditarOferta(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalEditarOferta(false)}>
          Editar Oferta
        </MDBModalHeader>
        <MDBModalBody>
          {formulario ? (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="input__id">id</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="input__id"
                    value={formulario.id}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="input__DNI">DNI Empleado</label>
                  <select
                    className="form-control"
                    name="dniEmpleado"
                    onChange={handleChange}
                  >
                    <option value="0">--Empleado--</option>
                    {objEmpleado.map((rpta) => {
                      return (
                        <option key={rpta.id} value={rpta.dni}>
                          {rpta.apellidoPaterno +
                            " " +
                            rpta.apellidoMaterno +
                            " " +
                            rpta.primerNombre}
                        </option>
                      );
                    })}
                  </select>
                  {/* <input
                    type="number"
                    className="form-control"
                    id="input__DNI"
                    placeholder="Ejm: 84512754"
                    value={formulario.dniEmpleado}
                    name="dniEmpleado"
                    onChange={handleChange}
                  /> */}
                </div>
                <div className="form-group col-md-6">
                  <label for="input_DiaDOferta">Día de Oferta</label>
                  <input
                    type="date"
                    className="form-control"
                    id="input_DiaDOferta"
                    placeholder="Ejm: 2021-04-13"
                    value={formulario.diaDeOferta}
                    name="diaDeOferta"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="input__HoraDInicio">Hora de Inicio</label>
                  <input
                    type="time"
                    className="form-control"
                    id="input__HoraDInicio"
                    placeholder=""
                    value={formulario.horaDeInicio}
                    name="horaDeInicio"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="input_costo">Costo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input_costo"
                    placeholder="Ejm: 50"
                    value={formulario.costo}
                    name="costo"
                    onChange={handleChange}
                  />
                </div>
                <small>
                  Nota: Son dos horas la duración del servicio por cada oferta.
                  <br />
                  Ejm: Si la Hora de Inicio es 13:00 duraría hasta las 15:00
                </small>
              </div>
              <div className="form-group d-flex flex-row-reverse">
                <button className="btn btn-palido" type="submit">
                  Guardar Cambios
                </button>
                <button
                  className="btn btn-colorado mr-2"
                  onClick={() => setMostrarModalEditarOferta(false)}
                >
                  Salir
                </button>
              </div>
            </form>
          ) : null}
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default AdminModalEditOferta;
