import React, { useEffect, useState } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import { putEmpleadoById } from "../../../services/empleadoService";
import Swal from "sweetalert2";

const AdminModalEditarEmpleado = ({
  mostrarModalEditarEmpleado,
  setMostrarModalEditarEmpleado,
  objEmpleadoEditar,
  traerEmpleado,
}) => {
  const [formulario, setFormulario] = useState(objEmpleadoEditar);
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setFormulario({ ...objEmpleadoEditar });
  }, [objEmpleadoEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    putEmpleadoById(formulario).then((rpta) => {
      if (rpta.data) {
        setMostrarModalEditarEmpleado(false);
        Swal.fire({
          text: "Empleado editado correctamente",
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
        isOpen={mostrarModalEditarEmpleado}
        toggle={() => setMostrarModalEditarEmpleado(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalEditarEmpleado(false)}>
          Editar Empleado
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
                    placeholder="Ejm: https://n9.cl/bq2lk"
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
                  placeholder="Ejm: 970318010"
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
                    placeholder="Ejm: https://n9.cl/bq2lk"
                    value={formulario.correo}
                    name="linkFoto"
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
                    placeholder="Ejm: 970318010"
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
                  onClick={() => setMostrarModalEditarEmpleado(false)}
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

export default AdminModalEditarEmpleado;
