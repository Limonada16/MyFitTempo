import React, { useContext } from "react";
import { Route, Link, Switch } from "react-router-dom";
import AuthContext from "../context/authContext";
import ClientesContext from "../context/ClientesContext";
import Carrito from "../pages/carrito/Carrito";
import Dashboard from "../pages/Dashboard/Dashboard";
import Empleado from "../pages/empleado/AdminEmpleadoPage";
import Ofertas from "../pages/ofertas/AdminOfertasPage";
import FotoPerfil from "./../../../img/jolu.jpg";
import FotoPerfil2 from "./../../../img/perfil.jpg";

import Cliente from "./../pages/clientes/AdminClientesPage";

const AdminSidebar = () => {
  const { ...state } = useContext(AuthContext);
  const { sidebr, setSidebr } = useContext(ClientesContext);
  const { sombr, setSombr } = useContext(ClientesContext);
  let foto;
  if (state.usu_nom === "Jorge Luis Ramos Nolasco") {
    foto = FotoPerfil;
  } else {
    foto = FotoPerfil2;
  }
  const cerrarMenu = (e) => {
    e.preventDefault();
    setSidebr("");
    setSombr("overlay");
  };
  return (
    <>
      <nav id="sidebar" className={sidebr}>
        <div id="dismiss" onClick={cerrarMenu}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="sidebar-header">
          <h3>MyFit Tempo</h3>
        </div>
        <div className="d-flex justify-content-center">
          <img src={foto} alt="" className="img__perfil" />
        </div>
        <ul className="list-unstyled components">
          <p>{state.usu_nom}</p>
          <li onClick={cerrarMenu} className="active">
            <Link to="/admin/dashboard" aria-expanded="false">
              Home
            </Link>
          </li>
          <li onClick={cerrarMenu}>
            <Link to="/admin/clientes">Cliente</Link>
          </li>
          <li onClick={cerrarMenu}>
            <Link to="/admin/empleado">Empleado</Link>
          </li>
          <li onClick={cerrarMenu}>
            <Link to="/admin/ofertas">Ofertas</Link>
          </li>
          <li onClick={cerrarMenu}>
            <Link to="/admin/carrito">Carrito</Link>
          </li>
        </ul>
        <ul className="list-unstyled CTAs">
          <li>
            <a
              href=""
              onClick={localStorage.removeItem("token")}
              className="download"
            >
              Salir <i className="fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/clientes" component={Cliente} />
        <Route path="/empleado" component={Empleado} />
        <Route path="/ofertas" component={Ofertas} />
        <Route path="/carrito" component={Carrito} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/" component={Home} /> */}
      </Switch>
      <div className={sombr} id="sombr"></div>
    </>
  );
};

export default AdminSidebar;
