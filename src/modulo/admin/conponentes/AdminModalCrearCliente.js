import React, { useState } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import { postCliente } from "../../../services/clientesService";
import Swal from "sweetalert2";
const formularioVacio = {
  dni: "",
  primerNombre: "",
  segundoNombre: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
  foto: "",
  correo: "",
  celular: "",
  direccion: "",
};

const AdminModalCrearCliente = ({
  mostrarModalCrearCliente,
  setMostrarModalCrearCliente,
  traerClientes,
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
    postCliente(formulario).then((rpta) => {
      if (rpta.data) {
        setMostrarModalCrearCliente(false);
        setFormulario(formularioVacio);
        Swal.fire({
          text: "Cliente registrado correctamente",
          icon: "success",
          timer: 2000,
        });
        traerClientes();
      }
    });
  };
  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalCrearCliente}
        toggle={() => setMostrarModalCrearCliente(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalCrearCliente(false)}>
          Crear Cliente
        </MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__DNI">DNI</label>
                <input
                  type="text"
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
                <label for="input_LinkFoto">Link de Foto</label>
                <input
                  type="text"
                  className="form-control"
                  id="input_LinkFoto"
                  placeholder="Ejm: https://n9.cl/bq2lk"
                  value={formulario.foto}
                  name="foto"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__Correo">Correo</label>
                <input
                  type="text"
                  className="form-control"
                  id="input__Correo"
                  placeholder="Ejm: jramosn@uni.edu.pe"
                  value={formulario.correo}
                  name="correo"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="input__Celular">Celular</label>
                <input
                  type="text"
                  className="form-control"
                  id="input__Celular"
                  placeholder="Ejm: 970318010"
                  value={formulario.celular}
                  name="celular"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
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
            <div className="form-group d-flex flex-row-reverse">
              <button className="btn btn-palido" type="submit">
                Guardar Cambios
              </button>
              <button
                className="btn btn-colorado mr-2"
                type="button"
                onClick={() => setMostrarModalCrearCliente(false)}
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

export default AdminModalCrearCliente;
