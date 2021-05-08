import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light text-white navbar__princi sticky-top d-flex justify-content-end">
                <a className="navbar-brand text-white">My<span className="text-warning">MFT H4L</span> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </>
    )
}

export default Header
