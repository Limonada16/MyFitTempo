import React, { useContext, useRef } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import logo from "./../../../img/logo.png";
import ReactToPrint from "react-to-print";

const AdminModalImprimirCarrito = ({
  modal,
  setModal,
  datatableCarritoDeail,
}) => {
  let SubTotal = 0;

  const boletaRef = useRef();

  return (
    <MDBContainer>
      <MDBModal isOpen={modal} toggle={() => setModal(false)} size="lg">
        <MDBModalHeader toggle={() => setModal(false)}>
          Boleta de Venta
        </MDBModalHeader>
        <MDBModalBody>
          <div className="container" ref={boletaRef}>
            <div className="col-md-12">
              <div className="invoice">
                <div className="invoice-header">
                  <div className="col-md-12 d-flex justify-content-between">
                    <div class="col-lg-6 d-flex justify-content-center">
                      <div class="invoice-logo ">
                        <img width="150" src={logo} alt="Invoice logo" />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="invoice-from">
                        <ul class="list-unstyled text-right">
                          <li>-----------------</li>
                          <li>R.U.C. 10007456085</li>
                          <li>BOLETE DE VENTA</li>
                          <li>Nº 002- 0000504</li>
                          <li>-----------------</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="invoice-content">
                  <div className="table-responsive">
                    <table className="table table-invoice">
                      <thead>
                        <tr>
                          <th className="text-center">#</th>
                          <th className="text-center">Id Empleado</th>
                          <th className="text-center">Hora de Inicio</th>
                          <th className="text-center">Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {datatableCarritoDeail.rows.map((objDetalleC, i) => {
                          SubTotal += +objDetalleC.costo;
                          return (
                            <tr>
                              <td className="text-center">{i + 1}</td>
                              <td className="text-center">
                                {objDetalleC.idEmpleado}
                              </td>
                              <td className="text-center">
                                {objDetalleC.horaDeInicio}
                              </td>
                              <td className="text-center">
                                S/. {objDetalleC.costo}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="invoice-price">
                    <div className="invoice-price-left">
                      <div className="invoice-price-row">
                        <div className="sub-price">
                          <small>SUBTOTAL</small>
                          <span className="text-inverse">S/. {SubTotal}</span>
                        </div>
                        <div className="sub-price">
                          <i className="fa fa-plus text-muted"></i>
                        </div>
                        <div className="sub-price">
                          <small>I.G.V. (18%)</small>
                          <span className="text-inverse">
                            S/. {(SubTotal * 0.18).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="invoice-price-right">
                      <small>TOTAL</small>{" "}
                      <span className="f-w-600">
                        S/. {SubTotal + SubTotal * 0.18}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="invoice-note">
                  * Haga todos los cheques pagaderos a [MyFit Tempo]
                  <br />
                  * El pago vence en 30 días
                  <br />* Si tiene alguna pregunta sobre esta factura, contacto
                  [Jorge Luis, 970318010, jramosn@uni.edu.pe]
                </div>

                <div className="invoice-footer">
                  <p className="text-center m-b-5 f-w-600">
                    GRACIAS POR HACER NEGOCIOS
                  </p>
                  <p className="text-center">
                    <span className="m-r-10">
                      <i className="fa fa-fw fa-lg fa-globe"></i>{" "}
                      www.myfittempo.pe
                    </span>
                    <span className="m-r-10">
                      <i className="fa fa-fw fa-lg fa-phone-volume"></i>{" "}
                      T:01-3819230
                    </span>
                    <span className="m-r-10">
                      <i className="fa fa-fw fa-lg fa-envelope"></i>{" "}
                      myfittempo@gmail.comm
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn
            type="button"
            className="btn-colorado"
            onClick={() => setModal(false)}
          >
            Salir
          </MDBBtn>
          <ReactToPrint
            trigger={() => <button className="btn btn-palido">Imprimir</button>}
            content={() => boletaRef.current}
          />
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default AdminModalImprimirCarrito;
