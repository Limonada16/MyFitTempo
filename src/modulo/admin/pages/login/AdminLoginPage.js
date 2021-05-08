import React, { useState, useContext } from "react";
import { postLogin } from "../../../../services/authService";
import AuthContext from "../../context/authContext";
import { withRouter } from "react-router-dom";
import logito from "./../../../../img/logo-gym.png";

const AdminLoginPage = ({ history }) => {
  const [formulario, setFormulario] = useState({
    correo: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const { iniciarSesionContext } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(formulario).then((rpta) => {
      if (rpta.data.ok) {
        //informar la contexto que hemos iniciado sesion
        iniciarSesionContext(rpta.data.token);
        history.push("/admin/dashboard");
      }
    });
  };
  return (
    <>
      <div className="container-fluid login__contenido">
        <div className="row Fila__Login">
          <div className="papa">
            <div className="cuadrado">
              <h1 className="titulo__body">
                <img src={logito} alt="" width="250" />
              </h1>
            </div>
          </div>
          <div className="papa">
            <div className="col-md-12">
              <form className="formulario" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    name="correo"
                    value={formulario.correo}
                    onChange={handleChange}
                    placeholder="Ejm: jramosn@uni.edu.pe"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Nunca compartiremos su correo electrónico con nadie más.
                  </small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formulario.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                  />
                </div>
                <button type="submit" className="btn hambur">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(AdminLoginPage);
