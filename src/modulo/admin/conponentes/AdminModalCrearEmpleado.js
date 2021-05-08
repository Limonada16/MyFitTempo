import React, { useState } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import { postEmpleado } from "../../../services/empleadoService";
import Swal from "sweetalert2";
const formularioVacio = {
  dni: "",
  primerNombre: "",
  segundoNombre: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
  contrasena: "",
  profesion: "",
  linkFoto: "",
  descripcion: "",
  correo: "",
  celular: "",
  direccion: "",
  distrito: "",
};
const AdminModalCrearEmpleado = ({
  mostrarModalCrearEmpleado,
  setMostrarModalCrearEmpleado,
  traerEmpleado,
}) => {
  const [formulario, setFormulario] = useState({ ...formularioVacio });
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postEmpleado(formulario).then((rpta) => {
      if (rpta.data) {
        setMostrarModalCrearEmpleado(false);
        setFormulario(formularioVacio);
        Swal.fire({
          text: "Empleado registrado correctamente",
          icon: "success",
          timer: 2000,
        });
        traerEmpleado();
      }
    });
  };

  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalCrearEmpleado}
        toggle={() => setMostrarModalCrearEmpleado(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalCrearEmpleado(false)}>
          Crear Empleado
        </MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__DNI">DNI</label>
                <input
                  type="number"
                  className="form-control"
                  id="input__DNI"
                  placeholder="Ejm: 84512754"
                  value={formulario.dni}
                  name="dni"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="input_Nombre">Primer Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="input_Nombre"
                  placeholder="Ejm: Jorge"
                  value={formulario.primerNombre}
                  name="primerNombre"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__SegNombre">Segundo Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="input__SegNombre"
                  placeholder="Ejm: Luis"
                  value={formulario.segundoNombre}
                  name="segundoNombre"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="input_ApPaterno">Apellido Paterno</label>
                <input
                  type="text"
                  className="form-control"
                  id="input_ApPaterno"
                  placeholder="Ejm: Ramos"
                  value={formulario.apellidoPaterno}
                  name="apellidoPaterno"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__ApMaterno">Apellido Materno</label>
                <input
                  type="text"
                  className="form-control"
                  id="input__ApMaterno"
                  placeholder="Ejm: Nolasco"
                  value={formulario.apellidoMaterno}
                  name="apellidoMaterno"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="input_Contraseña">Contraseña</label>
                <input
                  type="text"
                  className="form-control"
                  id="input_Contraseña"
                  placeholder="Ejm: xxxxx"
                  value={formulario.contrasena}
                  name="contrasena"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input_Profesion">Profesión</label>
                <input
                  type="text"
                  className="form-control"
                  id="input_Profesion"
                  placeholder="Ejm: Emtrenador"
                  value={formulario.profesion}
                  name="profesion"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="input_LinkFoto">Link de Foto</label>
                <input
                  type="text"
                  className="form-control"
                  id="input_LinkFoto"
                  placeholder="Ejm: https://n9.cl/bq2lk"
                  value={formulario.linkFoto}
                  name="linkFoto"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-group">
              <label for="Text__Descripcion">Descripción de tu trabajo</label>
              <textarea
                rows="3"
                type="text"
                className="form-control"
                id="Text__Descripcion"
                placeholder="Habla sobre tu trabajo ..."
                value={formulario.descripcion}
                name="descripcion"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input_Correo">Correo</label>
                <input
                  type="text"
                  className="form-control"
                  id="input_Correo"
                  placeholder="Ejm: jramosn@uni.edu.pe"
                  value={formulario.correo}
                  name="correo"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="Text__Celular">Celular</label>
                <input
                  type="text"
                  className="form-control"
                  id="Text__Celular"
                  placeholder="Ejm: 970318010"
                  value={formulario.celular}
                  name="celular"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__Direccion">Direción</label>
                <input
                  type="text"
                  className="form-control"
                  id="input__Direccion"
                  placeholder="Ejm: Mz f3 lt4 10 de Octubre II Etapa San Juan de Lurigancho Lima"
                  value={formulario.direccion}
                  name="direccion"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="Text__Distrito">Distrito</label>
                <input
                  type="text"
                  className="form-control"
                  id="Text__Distrito"
                  placeholder="Ejm: San Juan del Lurigancho"
                  value={formulario.distrito}
                  name="distrito"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group d-flex flex-row-reverse">
              <button className="btn btn-palido" type="submit">
                Guardar Cambios
              </button>
              <button
                className="btn btn-colorado mr-2"
                type="button"
                onClick={() => setMostrarModalCrearEmpleado(false)}
              >
                Salir
              </button>
            </div>
          </form>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default AdminModalCrearEmpleado;
