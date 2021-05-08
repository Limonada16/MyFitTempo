import React, { useContext } from "react";
import { MDBDataTableV5, MDBBtn } from "mdbreact";

import OfertasContext from "../../context/ofertaContext";
import AdminModalEditOferta from "../../conponentes/AdminModalEditOferta";
import AdminModalCrearOferta from "../../conponentes/AdminModalCrearOferta";

const Ofertas = () => {
  const {
    datatableOfertas,
    cargando,
    mostrarModalEditarOferta,
    setMostrarModalEditarOferta,
    objOfertaEditar,
    traerOferta,
    mostrarModalCrearOferta,
    setMostrarModalCrearOferta,
  } = useContext(OfertasContext);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between">
            <h1>Ofertas</h1>
            <div>
              <form className="d-flex mt-3">
                <div>
                  <MDBBtn
                    onClick={() => setMostrarModalCrearOferta(true)}
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
              <MDBDataTableV5
                striped
                searching={false}
                data={datatableOfertas}
              />
            )}
          </div>

          <AdminModalEditOferta
            traerOferta={traerOferta}
            objOfertaEditar={objOfertaEditar}
            mostrarModalEditarOferta={mostrarModalEditarOferta}
            setMostrarModalEditarOferta={setMostrarModalEditarOferta}
          />
          <AdminModalCrearOferta
            mostrarModalCrearOferta={mostrarModalCrearOferta}
            setMostrarModalCrearOferta={setMostrarModalCrearOferta}
            traerOferta={traerOferta}
          />
        </div>
      </div>
    </>
  );
};

export default Ofertas;
