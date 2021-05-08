import React, { useContext } from "react";
import ClientesContext from "../context/ClientesContext";

const AdminNavbar = () => {
  const { setSidebr, setSombr } = useContext(ClientesContext);

  const mostrarMenu = (e) => {
    e.preventDefault();
    setSidebr("active");
    setSombr("overlay active");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            onClick={mostrarMenu}
            className="btn hambur"
          >
            <i className="fas fa-align-left"></i>
          </button>
          <button
            className="btn hambur-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto ">
              <h2>
                MyFit Tempo <i className="fas fa-dumbbell"></i>
              </h2>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
