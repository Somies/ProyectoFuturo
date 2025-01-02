// INICIAL/inicial.jsx
import React, { useState } from 'react';
import './cabecerainicial.css';


import { Link } from 'react-router-dom';

const Inicial = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [mostrarContenido, setMostrarContenido] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
    const toggleContenido = () => {
      setMostrarContenido(!mostrarContenido);
    };
  return (
    <div>
        <nav className='cabeza'>
        <section className="subcabeza1">
          <section className="cuadro1cabeza1">
            <div className="logocuadro1cabeza1">
            <Link to="/portada">
                <img src="/logo.jpg" alt="logo" />
            </Link>
            </div>
            <section className="cuentacuadro1cabeza1">
              <a className="nav-link" >Inicial</a>
            </section>
          </section>
        </section>

        <section className="cabeza2">
          <section className="sub1cabeza2">
            {/* Botón de hamburguesa */}
            <div className="hamburguesa" onClick={toggleMenu}>
              &#9776;
            </div>

            {/* Menú desplegable */}
            <div className={`menusub1cabeza2 ${menuVisible ? 'visible' : ''}`}>
              <a href="#">3 añitos</a>
              <a href="#">4 añitos</a>
              <a href="#">5 añitos</a>
              <a href="#">6 añitos</a>
            </div>
          </section>
        </section>
      </nav>

    </div>
  );
}

export default Inicial;
