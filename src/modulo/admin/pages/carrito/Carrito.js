import React, { useContext } from "react";
import { MDBDataTableV5 } from "mdbreact";
import CarritoContext from "../../context/carritoContext";
import AdminModalCarritoDetalle from "../../conponentes/AdminModalCarritoDetalle";

const Carrito = () => {
  const {
    idCarrito,
    setIdCarrito,
    datatableCarrito,
    cargando,
    mostrarModalCarritoDetail,
    setMostrarModalCarritoDetail,
    objCarritoEditar,
  } = useContext(CarritoContext);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between">
            <h1>Carrito</h1>
            <div>
              <form className="d-flex mt-3"></form>
            </div>
          </div>

          <div className="col-md-12 tablita">
            {cargando ? (
              <div className="alert alert-info">Cargando...</div>
            ) : (
              <MDBDataTableV5
                striped
                searching={false}
                data={datatableCarrito}
              />
            )}
          </div>
          <AdminModalCarritoDetalle
            idCarrito={idCarrito}
            setIdCarrito={setIdCarrito}
            objCarritoEditar={objCarritoEditar}
            mostrarModalCarritoDetail={mostrarModalCarritoDetail}
            setMostrarModalCarritoDetail={setMostrarModalCarritoDetail}
          />
        </div>
      </div>
    </>
  );
};

export default Carrito;
