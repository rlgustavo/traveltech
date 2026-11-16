import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(){
    return(
        <>
            <header id="header">

                    <span className="logo"> 
                        <img src="/Logo.png" alt="Logo" /> 
                    </span>

                    <nav className="menu">

                        <Link to="/" className="link"> Inicio </Link>

                        <Link to="/viagens" className="link"> Viagens </Link>

                        <Link to="/termos" className="link"> Termos e Serviços </Link>


                    </nav>

                    <div className="botao">
                        <Link to="/login" className="btn-login"> Login </Link>
                        <Link to="/cadastrar" className="btn-cadastro"> Cadastre-se</Link>
                    </div>

            </header>
        </>
    )
}

export default Header;