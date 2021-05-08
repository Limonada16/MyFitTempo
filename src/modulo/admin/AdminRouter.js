import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminSidebar from "./conponentes/adminSidebar";
import AdminClientesPage from "./pages/clientes/AdminClientesPage";
import "./../../css/estilos.css";
import "./../../css/login.css";
import ClientesState from "./context/clientesState";
import AdminLoginPage from "./pages/login/AdminLoginPage";
import AuthState from "./context/authState";
import PrivateRoute from "../../PrivateRoute";
import Navbar from "./conponentes/adminNavbar";
import AdminEmpleadoPage from "./pages/empleado/AdminEmpleadoPage";
import AdminOfertasPage from "./pages/ofertas/AdminOfertasPage";
import EmpleadoState from "./context/EmpleadoState";
import OfertasState from "./context/OfertasState";
import AdminCarritoPage from "./pages/carrito/AdminCarritoPage";
import CarritoState from "./context/CarritoState";
import AdminDashboardPages from "./pages/Dashboard/AdminDashboardPages";
const AdminRouter = () => {
  return (
    <AuthState>
      <CarritoState>
        <OfertasState>
          <EmpleadoState>
            <ClientesState>
              <AdminSidebar />
              <Switch>
                <PrivateRoute path="/admin/clientes">
                  <div id="content">
                    <Navbar />
                    <AdminClientesPage />
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/admin/empleado">
                  <div id="content">
                    <Navbar />
                    <AdminEmpleadoPage />
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/admin/ofertas">
                  <div id="content">
                    <Navbar />
                    <AdminOfertasPage />
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/admin/carrito">
                  <div id="content">
                    <Navbar />
                    <AdminCarritoPage />
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/admin/dashboard">
                  <div id="content">
                    <Navbar />
                    <AdminDashboardPages />
                  </div>
                </PrivateRoute>
                <Route path="/admin/">
                  <AdminLoginPage />
                </Route>
              </Switch>
            </ClientesState>
          </EmpleadoState>
        </OfertasState>
      </CarritoState>
    </AuthState>
  );
};

export default AdminRouter;
