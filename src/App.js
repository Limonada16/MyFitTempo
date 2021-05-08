import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminRouter from "./modulo/admin/AdminRouter";
import "./css/boletaImprimir.css";
import EmpleadoRouter from "./modulo/empleado/EmpleadoRouter";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminRouter />
        </Route>
        <Route path="/empleado">
          <EmpleadoRouter />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
