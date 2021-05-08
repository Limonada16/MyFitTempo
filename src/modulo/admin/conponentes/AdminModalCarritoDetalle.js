import React, { useContext, useEffect, useState } from "react";
import { getCarritoById } from "../../../services/carritoService";
import CarritoContext from "../context/carritoContext";
import {
  MDBDataTableV5,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from "mdbreact";
import AdminModalImprimirCarrito from "./AdminModalImprimirCarrito";

const AdminModalCarritoDetalle = ({
  idCarrito,
  mostrarModalCarritoDetail,
  setMostrarModalCarritoDetail,
}) => {
  const { cargando, setCargando } = useContext(CarritoContext);
  const [modal, setModal] = useState(false);
  const [datatableCarritoDeail, setDatatableCarritoDetail] = useState({
    columns: [
      {
        label: "Id Oferta",
        field: "id",
      },
      {
        label: "Hora de Inicio",
        field: "horaDeInicio",
      },
      {
        label: "costo de la Oferta",
        field: "costo",
      },
      {
        label: "Id Empleado",
        field: "idEmpleado",
      },
    ],
    rows: [],
  });
  const traerCarritoDetail = () => {
    getCarritoById(idCarrito).then((rpta) => {
      if (rpta.data) {
        let datoFormateadoDetail = rpta.data.ofertas.map((objCarritoDetail) => {
          return {
            ...objCarritoDetail,
          };
        });
        setDatatableCarritoDetail({
          ...datatableCarritoDeail,
          rows: datoFormateadoDetail,
        });
        setCargando(false);
      }
    });
  };

  useEffect(() => {
    traerCarritoDetail();
  }, [idCarrito]);

  return (
    <>
      <MDBContainer>
        <MDBModal
          isOpen={mostrarModalCarritoDetail}
          toggle={() => setMostrarModalCarritoDetail(false)}
          size="lg"
        >
          <MDBModalHeader toggle={() => setMostrarModalCarritoDetail(false)}>
            Detaller de Carrito
          </MDBModalHeader>
          <MDBModalBody>
            {cargando ? (
              <div className="alert alert-info">Cargando...</div>
            ) : (
              <MDBDataTableV5
                striped
                searching={false}
                data={datatableCarritoDeail}
              />
            )}
            <div className="d-flex flex-row-reverse">
              <MDBBtn
                onClick={() => {
                  setModal(true);
                  setMostrarModalCarritoDetail(false);
                }}
                className="btn btn-palido"
              >
                Generar Boleta <i class="fas fa-file-alt"></i>
              </MDBBtn>
              <MDBBtn
                onClick={() => setMostrarModalCarritoDetail(false)}
                className="btn btn-colorado mr-2"
                type="button"
              >
                Salir
              </MDBBtn>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
      <AdminModalImprimirCarrito
        modal={modal}
        setModal={setModal}
        datatableCarritoDeail={datatableCarritoDeail}
      />
    </>
  );
};

export default AdminModalCarritoDetalle;
