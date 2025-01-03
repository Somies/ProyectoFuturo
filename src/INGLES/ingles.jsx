import React, { useState } from 'react';
import './cabeceraingles.css';
import './inglesingles.css';
import './pieingles.css';

import { Link } from 'react-router-dom';

const Ingles = () => {
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
        <nav className='cabezaingles'>
        <section className="subcabeza1ingles">
          <section className="cuadro1cabeza1ingles">
            <div className="logocuadro1cabeza1ingles">
            <Link to="/portada">
                <img src="/logo.jpg" alt="logo" />
            </Link>
            </div>
            <section className="cuentacuadro1cabeza1ingles">
              <a className="nav-link" >Ingles</a>
            </section>
          </section>
        </section>

        <section className="cabeza2ingles">
          <section className="sub1cabeza2ingles">
            {/* Botón de hamburguesa */}
            <div className="hamburguesaingles" onClick={toggleMenu}>
              &#9776;
            </div>

            {/* Menú desplegable */}
            <div className={`menusub1cabeza2ingles ${menuVisible ? 'visible' : ''}`}>
              <a href="#">Basico</a>
              <a href="#">Intermedio</a>
              <a href="#">Avanzado</a>
            </div>
          </section>
        </section>
      </nav>

      <main className='cuerpoingles'>
        <section className='sub1cuerpoingles'>
          <section className='totalsub1cuerpoingles'>
            <section className='cuadro1sub1cuerpoingles'>
              <img className='foto1ingles' src="/INGLES/foto1ingles.png" alt="" />
              <div className='texto1ingles'><p>Empieza tu viaje hoy con nosotros</p></div>
            </section>


            <section className="cuadro2sub1cuerpoingles">
              <div className="titulocuadro2sub1cuerpoingles">
                <span className="blancocuadro2sub1cuerpoingles">Learn</span>
                <span className="rojocuadro2sub1cuerpoingles">English</span>
              </div>
              <p>
                Bienvenido a nuestra plataforma de aprendizaje de inglés, 
                diseñada para ayudarte a alcanzar tus metas, ya sea que estés 
                empezando desde cero, reforzando tus conocimientos o perfeccionando tu fluidez. 
                <span className="avisocuadro2sub1cuerpoingles">¡Únete a nosotros y domina el inglés fácilmente!</span>
              </p>
            </section>


          </section>
        </section>
      </main>

      <footer>
    <section className="pieingles">
        <section className="sub1pieingles">
            {/* Información general */}
            <div className="infoingles">
                <h3>Sobre Nosotros</h3>
                <p>
                    Enseñamos cursos gratuitos para inicial, primaria, secundaria, inglés y programación (frontend-backend).
                </p>
                {/* Texto adicional */}
                <p className={mostrarContenido ? "mostraringles" : "ocultaringles"}>
                    {/* Enlaces rápidos */}
                <div className='informacioningles'>
                    <div className="enlacesingles">
                        <h3>Enlaces legales</h3>
                        <ul>
                            <li><a href="#inicial">Política de privacidad</a></li>
                            <li><a href="#primaria">Términos y condiciones</a></li>
                            <li><a href="#secundaria">Contacta con nosotros</a></li>
                        </ul>
                    </div>

                    {/* Redes sociales */}
                    <div className="redesingles">
                        <h3>Síguenos</h3>
                        <div className="iconsingles">
                            <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
                            <a href="#"><img src="/twiter.png" alt="Twitter" /></a>
                            <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
                            <a href="#"><img src="/wasap.png" alt="YouTube" /></a>
                        </div>
                    </div>
                    </div>
                </p>
                {/* Flecha para mostrar/ocultar el contenido */}
                <span className="flechaingles" onClick={toggleContenido}>
                    {mostrarContenido ? "▲" : "▼"}
                </span>
            </div>
            <div className="enlacesingles">
                        <h3>Enlaces legales</h3>
                        <ul>
                            <li><a href="#inicial">Política de privacidad</a></li>
                            <li><a href="#primaria">Términos y condiciones</a></li>
                            <li><a href="#secundaria"></a></li>
                        </ul>
                    </div>

                    {/* Redes sociales */}
                    <div className="redesingles">
                        <h3>Síguenos</h3>
                        <div className="iconsingles">
                            <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
                            <a href="#"><img src="/twiter.png" alt="Twitter" /></a>
                            <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
                            <a href="#"><img src="/wasap.png" alt="YouTube" /></a>
                        </div>
                    </div>
        </section>
    </section>
    
</footer>






    </div>
  );
}

export default Ingles;
