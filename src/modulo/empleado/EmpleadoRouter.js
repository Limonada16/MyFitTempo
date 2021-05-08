import React from 'react'
import './../../css/styles.css';
import { Switch, Route, Link } from "react-router-dom"
import Header from './componentes/Header'
import TrabajadorRegistro from './pages/TrabajadorRegistro';
import TrabajadorLogin from './pages/TrabajadorLogin';
import TrabajadorMainPage from './pages/TrabajadorMainPage';

const EmpleadoRouter = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/empleado/registro">
                    <TrabajadorRegistro/>
                </Route>
                <Route path="/empleado/login">
                    <TrabajadorLogin/>
                </Route>
                <Route path="/empleado/main">
                    <TrabajadorMainPage/>
                </Route>
            </Switch>
        </div>
    )
}

export default EmpleadoRouter
