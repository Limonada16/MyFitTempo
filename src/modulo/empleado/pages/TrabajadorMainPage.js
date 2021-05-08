import React from 'react'
import ContenidosPerfilEmpleado from './../componentes/ContenidosPerfilEmpleado';
import SideBarDatosPersonales from './../componentes/SideBarDatosPersonales';
import "./../../../css/stylesMainTrabajador.css";
import { withRouter } from "react-router-dom";
import imgBg from "../../../img/texturaOxidada.png"

const TrabajadorMainPage = ({history}) => {
    
    console.log(history.location);
    // console.log(props);
    return (
        
        <div className="container-fluid bkg">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="sidebar">
                        <SideBarDatosPersonales obj={history.location.state} />
                    </div>
                </div>
                <div className="col-md-9 col-sm-6">
                    <ContenidosPerfilEmpleado obj={history.location.state} />

                </div>
            </div>
        </div>
        
        
    )
}

export default withRouter (TrabajadorMainPage)
