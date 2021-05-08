import React, { useState } from "react";
import './../../../css/styles.css'
import Swal from 'sweetalert2'
import registroEmpleado from "./../../../services/service";
import { BrowserRouter as Router, Link, NavLink, useHistory } from 'react-router-dom'
import imgLoginRegis from "../../../img/pexels-ketut-subiyanto-5039659.jpg"
import { withRouter } from "react-router-dom";


const TrabajadorRegistro = ({history}) => {

    const [datos, setDatos] = useState({
        dni: 0,
        primerNombre: "",
        segundoNombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        profesion: "",
        linkfoto: "",
        descripcion: "",
        correo: "",
        celular: 0,
        distrito: "",
        contrasena: "",
    })

    const [error, setError] = useState(false)

    const { dni, primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno,
        profesion, linkfoto, descripcion, correo, celular, distrito, contrasena } = datos;


    const handleChange = e => {
        setDatos({ ...datos, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();

        if (dni === 0 ||
            primerNombre.trim() === "" ||
            segundoNombre.trim() === "" ||
            apellidoPaterno.trim() === "" ||
            apellidoMaterno.trim() === "" ||
            profesion.trim() === "" ||
            linkfoto.trim() === "" ||
            descripcion.trim() === "" ||
            correo.trim() === "" ||
            celular === 0 ||
            distrito.trim() === "" ||
            contrasena.trim()==="") {
            setError(true);
            return;
        }


        registroEmpleado(datos).then(rpta => {
            if (rpta.status === 201) {
                // console.log(rpta);
                history.push({ pathname: `/empleado/main`, state: rpta.data })
                Swal.fire({
                    icon: 'success',
                    title: 'Felicidades!',
                    text: 'Tu formulario fue enviado correctamente!',
                    confirmButtonText: `Genial`,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        // window.location.href = '/empleado/main';
                    }
                })
            }


        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="bkg">
            <div className="container-fluid">
                <div className="row row__imgform">
                    <div className="col col__img">
                        <img src={imgLoginRegis} className="img__form" alt=""/>
                    </div>
                    <div className="col-md div__form">

                        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center formu">
                            <h2 className="text-warning">Registrarse</h2>
                            {error ?
                                (<div className="alert alert-danger">
                                    Debes de llenar todos los campos
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>) : null}
                            <input type="number" name="dni" value={dni} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ingrese su DNI" />
                            <input type="text" name="primerNombre" value={primerNombre} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ingrese su Primer Nombre" />
                            <input type="text" name="segundoNombre" value={segundoNombre} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ingrese su Segundo Nombre" />
                            <input type="text" name="apellidoPaterno" value={apellidoPaterno} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ingrese su Apellido Paterno" />
                            <input type="text" name="apellidoMaterno" value={apellidoMaterno} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ingrese el Apellido Materno" />
                            <input type="text" name="profesion" value={profesion} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ingrese su Profesión" />
                            <input type="text" name="linkfoto" value={linkfoto} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ej: https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" />
                            <input type="text" name="descripcion" value={descripcion} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ingrese una pequeña descripción de ti" />
                            <input type="email" name="correo" value={correo} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ingrese su correo electronico" />
                            <input type="number" name="celular" value={celular} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ingrese su numero de celular" />
                            <input type="text" name="distrito" value={distrito} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ingrese su distrito" />
                            <input type="password" name="contrasena" value={contrasena} onChange={handleChange} className="form-control form-control-sm mb-2" placeholder="Ingrese su contraseña" />
                            <div className="d-flex justify-content-center div__btn">
                                <button type="submit" className="btn btn-warning btn__canceenviar">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter (TrabajadorRegistro)
