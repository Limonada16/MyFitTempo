import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "./modulo/admin/context/authContext";

const PrivateRoute = (props) => {
  const { autenticado, cargando } = useContext(AuthContext);

  return !cargando ? (
    autenticado ? (
      <Route path={props.path}>{props.children}</Route>
    ) : (
      <Redirect to="/admin/" />
    )
  ) : localStorage.getItem("token") ? (
    <div>Cargando...</div>
  ) : (
    <Redirect to="/admin/" />
  );
};

export default PrivateRoute;
