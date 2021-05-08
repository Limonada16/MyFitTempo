import React, { useContext } from "react";
import ClientesContext from "../../context/ClientesContext";
import { MDBDataTableV5, MDBBtn } from "mdbreact";
import AdminModalEditCliente from "../../conponentes/AdminModalEditCliente";
import AdminModalCrearCliente from "../../conponentes/AdminModalCrearCliente";

const Clientes = () => {
  const {
    datatable,
    cargando,
    mostrarModalEditarCliente,
    setMostrarModalEditarCliente,
    objClienteEditar,
    traerClientes,
    mostrarModalCrearCliente,
    setMostrarModalCrearCliente,
  } = useContext(ClientesContext);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between">
            <h1>Clientes</h1>
            <div>
              <form className="d-flex mt-3">
                <div>
                  <MDBBtn
                    onClick={() => setMostrarModalCrearCliente(true)}
                    className="btn btn-naranja mr-2"
                  >
                    <i className="fas fa-plus-square"></i>
                  </MDBBtn>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-12 tablita">
            {cargando ? (
              <div className="alert alert-info">Cargando...</div>
            ) : (
              <MDBDataTableV5 striped searching={false} data={datatable} />
            )}
          </div>

          <AdminModalEditCliente
            traerClientes={traerClientes}
            objClienteEditar={objClienteEditar}
            mostrarModalEditarCliente={mostrarModalEditarCliente}
            setMostrarModalEditarCliente={setMostrarModalEditarCliente}
          />
          <AdminModalCrearCliente
            mostrarModalCrearCliente={mostrarModalCrearCliente}
            setMostrarModalCrearCliente={setMostrarModalCrearCliente}
            traerClientes={traerClientes}
          />
        </div>
      </div>
    </>
  );
};

export default Clientes;
