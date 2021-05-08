import React, { useContext, useEffect, useState } from "react";
import { getCarrito } from "../../../../services/carritoService";

import ClientesContext from "../../context/ClientesContext";
import EmpleadoContext from "../../context/EmpleadoContext";
import OfertasContext from "../../context/ofertaContext";

const Dashboard = () => {
  const { totalCliente } = useContext(ClientesContext);
  const { totalEmpleados } = useContext(EmpleadoContext);
  const { totalOfertas } = useContext(OfertasContext);
  const [totalIngresos, setTotalIngreso] = useState(0);
  let suma = 0;
  useEffect(() => {
    getCarrito().then((rpta) => {
      rpta.data.map((objCarrito) => {
        objCarrito.ofertas.map((objCostos) => {
          suma += objCostos.costo;
        });
      });
      setTotalIngreso((suma + suma * 0.18).toFixed(2));
    });
  }, []);

  return (
    <>
      <main className="container">
        <div className="row mt-4">
          <div className="col">
            <h1 className="display-3 text-center dash-card-oscuro">
              Dashboard Administrativo
            </h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header text-center">Total de Clientes</div>
              <div className="card-body text-center dash-card-palido">
                <span className="display-4">
                  {totalCliente} <i className="fas fa-male"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header text-center">Total de Empleados </div>
              <div className="card-body text-center dash-card-naranjas">
                <span className="display-4">
                  {totalEmpleados} <i className="fas fa-briefcase"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header text-center">Total de Ofertas</div>
              <div className="card-body text-center">
                <span className="display-4 dash-card-colorado">
                  {totalOfertas} <i className="fas fa-clipboard-check"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="card shadow">
              <div className="card-header text-center">Total de Ingresos</div>
              <div className="card-body text-center ">
                <p className="display-1 dash-card-oscuro">
                  S/. <span>{totalIngresos}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
