import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { getEmpleadoById, putDatosById } from "../../../services/service2";
import Swal from 'sweetalert2'
import { withRouter } from "react-router-dom";


const SideBarDatosPersonales = (props, {history}) => {
    console.log(props);
    const [formu, setFormu] = useState({
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
        direccion: "",
        distrito: "",
        contrasena : ""
    });
  
    const [error, setError] = useState(false);
    
    
    let { dni, primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, profesion, linkfoto, descripcion, correo, celular, direccion, distrito, contrasena } = formu;
   
    const handleChange = e => {
        setFormu({ ...formu, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        if (
            dni === 0 ||
            primerNombre === "" ||
            segundoNombre === "" ||
            apellidoPaterno === "" ||
            apellidoMaterno === "" ||
            profesion === "" ||
            linkfoto === "" ||
            descripcion === "" ||
            correo === "" ||
            celular === 0 ||
            direccion === "" ||
            distrito === "" ||
            contrasena === ""
        ) {
            setError(true);
            return;
        }
        putDatosById(formu).then(rpta => {
            if (rpta.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Correcto!',
                    text: 'Tus datos se actualizaron correctamente',
                    confirmButtonText: `Genial`,
                }).then((result) => {
                    window.location.reload();
                    history.push({ pathname: `/empleado/${rpta.data.id}`, state: rpta.data })
                    if (result.isConfirmed) {
                        // window.location.href = '/empleado/main';
                    }
                })


            }
        });
    };
    

    useEffect(() => {
        getEmpleadoById(props.obj.id).then(rpta => {
            console.log(rpta);
            setFormu({ ...rpta.data })
        })
    }, [])

    return (
        <>
            <div className="sidebar__datosPersonales">
                <h4 className="contenidos__title mb-1 text-white" >Profesional My<span className="yellow text-warning">MFT H4L</span></h4>

                <figure className="figura__card mb-5">
                    <img src={props.obj.linkfoto} alt="" className="card-img-top" />
                </figure>
                <div className="card-body">

                    <h4 className="card-title"><i className="fa fa-user" aria-hidden="true"
                        style={{ marginRight: '20px;' }}></i> NOM<span className="yellow">BRE</span></h4>
                    <p className="card-text">
                        {props.obj.primerNombre}
                    </p>
                    <h4 className="card-title"><i className="fa fa-align-justify" aria-hidden="true"
                        style={{ marginRight: '20px;' }}></i> APEL<span className="yellow">LIDO</span></h4>
                    <p className="card-text">
                        {props.obj.apellidoPaterno + props.obj.apellidoMaterno}
                    </p>
                    <h4 className="card-title"><i className="fa fa-envelope" aria-hidden="true"
                        style={{ marginRight: '20px;' }}></i> COR<span className="yellow">REO</span></h4>
                    <p className="card-text">
                        {props.obj.correo}
                    </p>
                    <h4 className="card-title"><i className="fa fa-university" aria-hidden="true"
                        style={{ marginRight: '20px;' }}></i> PROFE<span className="yellow">SIÓN</span></h4>
                    <p className="card-text">
                        {props.obj.profesion}
                    </p>
                    <div className="botones">
                        <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat"><i className="fa fa-download iconno"
                            aria-hidden="true"></i>Editar Perfil</button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content bg-dark text-warning">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Editar Perfil</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span className="text-warning" aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">DNI:</label>
                                                <input type="text" name="dni" value={formu.dni} onChange={handleChange} className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Primer Nombre:</label>
                                                <input type="text" name="primerNombre" value={formu.primerNombre} onChange={handleChange} className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Segundo Nombre:</label>
                                                <input type="text" name="segundoNombre" value={formu.segundoNombre} onChange={handleChange} className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Apellido Paterno:</label>
                                                <input type="text" name="apellidoPaterno" value={formu.apellidoPaterno} onChange={handleChange} className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Apellido Materno:</label>
                                                <input type="text" name="apellidoMaterno" value={formu.apellidoMaterno} onChange={handleChange} className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Profesión:</label>
                                                <input type="text" className="form-control" name="profesion" value={formu.profesion} onChange={handleChange} id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Link de tu foto:</label>
                                                <input type="text" className="form-control" name="linkfoto" value={formu.linkfoto} onChange={handleChange} id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Descripción:</label>
                                                <input type="text" className="form-control" name="descripcion" value={formu.descripcion} onChange={handleChange} id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Correo:</label>
                                                <input type="text" className="form-control" name="correo" value={formu.correo} onChange={handleChange} id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Celular:</label>
                                                <input type="text" className="form-control" name="celular" value={formu.celular} onChange={handleChange} id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Dirección:</label>
                                                <input type="text" className="form-control" name="direccion" value={formu.direccion} onChange={handleChange} id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Distrito:</label>
                                                <input type="text" className="form-control" name="distrito" value={formu.distrito} onChange={handleChange} id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Contraseña:</label>
                                                <input type="text" className="form-control" name="contrasena" value={formu.contrasena} onChange={handleChange} id="recipient-name" />
                                            </div>
                                            <div className="">
                                                <button type="submit" className="btn btn-warning" >Guardar Cambios</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <Link type="button" className="btn btn-danger" to={{pathname:"/empleado/login"}}><i className="fa fa-times-circle iconno"
                            aria-hidden="true" ></i> Cerrar Sesión</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(SideBarDatosPersonales)
