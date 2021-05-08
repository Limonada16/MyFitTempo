import React, { useState } from 'react'
import { getEmpleado } from '../../../services/service2'
import './../../../css/styles.css'
import { BrowserRouter as Router, Link, NavLink, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import imgLoginRegis from "../../../img/pexels-ketut-subiyanto-5039659.jpg"
import { withRouter } from "react-router-dom";

const TrabajadorLogin = ({history}) => {

    const [logDatos, setLogDatos] = useState([])
    

    const sendForm = (e) =>{
        e.preventDefault();
        const email = document.getElementById("correo");
        const contrasena = document.getElementById("contrasena");
        getEmpleado().then(rpta=>{
            rpta.data.map(respu =>{
                if(respu.correo === email.value && respu.contrasena === contrasena.value){
                    history.push({ pathname: `/empleado/main`, state: respu })
                    Swal.fire({
                        icon: 'success',
                        title: `Bienvenido! ${respu.primerNombre}`,
                        text: 'Acabas de iniciar Sesión',
                        confirmButtonText: `Genial`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            // window.location.href = '/empleado/main';
                        }
                    })
                }
            })
        }).catch(e=>{
            console.log(e);
        })
    }
    

    return (
        <div className="bkg">
            <div className="container-fluid">
                <div className="row row__imgform">
                    <div className="col col__img">
                        <img src={imgLoginRegis} className="img__form" alt="" />
                    </div>
                    <div className="col-md div__form">

                        <form onSubmit={sendForm} className="d-flex flex-column justify-content-center formu">
                            <h2 className="text-warning">Log In</h2>
                            {/* {error ?
                                (<div className="alert alert-danger">
                                    Debes de llenar todos los campos
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>) : null} */}
                           
                            <input type="email" name="correo" id="correo" className="form-control form-control-sm mb-2" placeholder="Ingrese su correo electronico" />
                            <input type="password" name="contrasena" id="contrasena" className="form-control form-control-sm mb-2" placeholder="Ingrese su contraseña" />
                            <div className="d-flex justify-content-center div__btn">
                                <button type="submit" className="btn btn-warning btn__canceenviar">Iniciar Sesión</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default withRouter(TrabajadorLogin)
