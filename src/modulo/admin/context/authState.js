import React, { useEffect, useState } from "react";
import { postVerificar } from "../../../services/authService";
import AuthContext from "./authContext";

const AuthState = (props) => {
  const [state, setState] = useState({
    autenticado: false,
    usu_nom: null,
    token: null,
    cargando: true,
  });
  const iniciarSesionContext = (token) => {
    localStorage.setItem("token", token);
    const playloadString = token.split(".")[1];
    const payloadStringDecript = atob(playloadString); //desencripta cual quier algoritmo en base 64
    const playloadJson = JSON.parse(payloadStringDecript);

    setState({
      autenticado: true,
      usu_nom: playloadJson.usu_nom,
      token: token,
      cargando: false,
    });
  };
  const iniciarSesionConLocalStorage = () => {
    if (localStorage.getItem("token")) {
      postVerificar(localStorage.getItem("token"))
        .then((rpta) => {
          if (rpta.data.ok) {
            iniciarSesionContext(localStorage.getItem("token"));
          } else {
            localStorage.removeItem("token");
            setState({
              autenticado: false,
              usu_nom: null,
              token: null,
              cargando: false,
            });
          }
        })
        .catch((error) => {
          localStorage.removeItem("token");
          setState({
            autenticado: false,
            usu_nom: null,
            token: null,
            cargando: false,
          });
        });
    }
  };
  useEffect(() => {
    iniciarSesionConLocalStorage();
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, iniciarSesionContext }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
