import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import TrabajadorRegistro from '../pages/TrabajadorRegistro'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { withRouter } from "react-router-dom";
import { getClienteById, getClientes } from '../../../services/service2';


const ContenidosPerfilEmpleado = ({history}) => {

    

    const [clientes, setClientes] = useState([]);

    const [datosCli, setDatosCli] = useState({
        dni: 0,
        primerNombre: "",
        segundoNombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        foto: "",
        correo: "",
        celular: 0,
        direccion: ""
    })

    const { dni, primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, foto, correo, celular, direccion } = datosCli

    const traerClientes = () => {
        getClientes().then(rpta => {
            setClientes(rpta.data);
        });
    };
    useEffect(() => {
        traerClientes();
    }, [])
    useEffect(() => {
        getClienteById(clientes.id).then(rpta => {
            setDatosCli({ ...rpta.data });
        })
    }, [])
    return (
        <>
            <div className="contenidos">
                <div className="sidebar__contenidos" style={{ overflowY: 'scroll' }}>
                    <h1 className="contenidos__title mb-4 text-white" style={{ textAlign: 'center' }}>MI <span className="yellow text-warning">CUENTA</span></h1>
                    <ul className="nav nav-pills nav-fill mb-3">
                        <li className="nav-item">
                            <button className="btn btn-dark" aria-current="page" style={{ width: "100%" }}>Ver Clientes</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-dark " style={{ width: "100%" }} data-toggle="modal" data-target="#exampleModal22">Ver Citas</button>
                            <div className="modal fade" id="exampleModal22" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body" >
                                            <FullCalendar plugins={[dayGridPlugin]}
                                                initialView="dayGridMonth"
                                                weekends={false}
                                                events={[
                                                    { title: 'event 1', date: '2019-04-01' },
                                                    { title: 'event 2', date: '2019-04-02' }
                                                ]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-dark" style={{ width: "100%" }}>Agregar Disponibilidad</button>
                        </li>

                    </ul>

                    <h2 className="contenidos__title text-white" style={{ textAlign: 'center' }}> MIS <span className="yellow text-warning">CLIENTES</span> </h2>
                    <div className="row">
                        {clientes.map((objCliente, i) => {
                            return (
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src={objCliente.foto} alt="" className="card-img-top" />
                                        <div className="card-body">

                                            <h4 className="card-title">NOM<span className="yellow">BRE</span></h4>
                                            <p className="card-text">
                                                {objCliente.primerNombre}
                                            </p>
                                            <h4 className="card-title">DÍA<span className="yellow"> D</span>E <span
                                                className="yellow">CITA</span></h4>
                                            <p className="card-text">
                                                10 - 05 - 2021
                                            </p>
                                            <h4 className="card-title"> HO<span className="yellow">RA</span></h4>
                                            <p className="card-text">
                                                08:00 am
                                            </p>
                                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter">Ver Perfil</button>
                                        </div>
                                        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content bg-dark text-white" style={{ display: 'flex !important' }}>
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLongTitle">Perfil {datosCli.id}</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>

                                                    </div>
                                                    <div className="modal-body d-flex flex-column">
                                                        <img src={objCliente.foto} alt="" className="card-img-top" />
                                                        <span>Nombre: {objCliente.primerNombre + objCliente.segundoNombre}</span>
                                                        <span>DNI: {objCliente.dni}</span>
                                                        <span>Correo: {objCliente.correo}</span>
                                                        <span>Celular: {objCliente.celular}</span>
                                                        <span>Dirección: {objCliente.direccion}</span>
                                                        <button type="button" className="btn btn-primary">Genial!</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );

                        })}

                    </div>

                </div>
            </div>
        </>
    )
}

export default withRouter (ContenidosPerfilEmpleado);
