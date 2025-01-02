import React, { useState } from 'react';
import './cabecera.css';
import './portada.css';
import './pie.css';
import { Link } from 'react-router-dom';



const Portada = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  
  // este codigo me recarga la misma pagina
  const handleReload = () => {
    window.location.reload();
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const toggleContenido = () => {
    setMostrarContenido(!mostrarContenido);
  };

  return (
    <div className="xdportada">

      <nav className='cabezaportada'>
        <section className="subcabeza1portada">
          <section className="cuadro1cabeza1portada">
            <div className="logocuadro1cabeza1portada">
            <img
              src="/logo.jpg"
              alt="logo"
              onClick={handleReload}
              style={{ cursor: 'pointer' }}
            />
            </div>
            <section className="cuentacuadro1cabeza1portada">
              <img src="/cuenta.png" alt="cuenta" />
              <a className="nav-link" href="xd">Cuenta</a>
            </section>
          </section>
        </section>

        <section className="cabeza2portada">
          <section className="sub1cabeza2portada">
            {/* Botón de hamburguesa */}
            <div className="hamburguesaportada" onClick={toggleMenu}>
              &#9776;
            </div>

            {/* Menú desplegable */}
            <div className={`menusub1cabeza2portada ${menuVisible ? 'visible' : ''}`}>
              <Link to="/inicial">Inicial</Link>
              <a href="xd">Primaria</a>
              <a href="xd">Secundaria</a>
              <Link to="/ingles">Ingles</Link>
              <a href="xd">Programación</a>
            </div>
          </section>
        </section>
      </nav>

      <main className="cuerpoportada">
        <section className="sub1cuerpoportada">
          <section className='espaciosub1cuerpoportada'></section>
          <section className="cuadro1sub1cuerpoportada">
            <h1>¡Desbloquea tu futuro ahora!</h1>
            <p>Explora recursos y herramientas para ti: <br />
            ✔ Aprende lo básico hasta lo avanzado.  <br />
            ✔ Mejora tus habilidades a tu ritmo.  <br />
            ✔ Construye el camino hacia tus metas.  <br />
            📲 ¡Empieza a crecer hoy!</p>

          </section>
        </section>
      </main>


    <footer>
    <section className="pieportada">
        <section className="sub1pieportada">
            {/* Información general */}
            <div className="infoportada">
                <h3>Sobre Nosotros</h3>
                <p>
                    Enseñamos cursos gratuitos para inicial, primaria, secundaria, inglés y programación (frontend-backend).
                </p>
                {/* Texto adicional */}
                <p className={mostrarContenido ? "mostrarportada" : "ocultarportada"}>
                    {/* Enlaces rápidos */}
                <div className='informacionportada'>
                    <div className="enlacesportada">
                        <h3>Categorías</h3>
                        <ul>
                            <li><a href="#inicial">Inicial</a></li>
                            <li><a href="#primaria">Primaria</a></li>
                            <li><a href="#secundaria">Secundaria</a></li>
                            <li><a href="#ingles">Inglés</a></li>
                            <li><a href="#programacion">Programación</a></li>
                        </ul>
                    </div>

                    {/* Redes sociales */}
                    <div className="redesportada">
                        <h3>Síguenos</h3>
                        <div className="iconsportada">
                            <a href="#"><img src="../facebook.png" alt="Facebook" /></a>
                            <a href="#"><img src="twiter.png" alt="Twitter" /></a>
                            <a href="#"><img src="instagram.png" alt="Instagram" /></a>
                            <a href="#"><img src="wasap.png" alt="YouTube" /></a>
                        </div>
                    </div>
                    </div>
                </p>
                {/* Flecha para mostrar/ocultar el contenido */}
                <span className="flechaportada" onClick={toggleContenido}>
                    {mostrarContenido ? "▲" : "▼"}
                </span>
            </div>
            <div className="enlacesportada">
                        <h3>Categorías</h3>
                        <ul>
                            <li><a href="#inicial">Inicial</a></li>
                            <li><a href="#primaria">Primaria</a></li>
                            <li><a href="#secundaria">Secundaria</a></li>
                            <li><a href="#ingles">Inglés</a></li>
                            <li><a href="#programacion">Programación</a></li>
                        </ul>
                    </div>

                    {/* Redes sociales */}
                    <div className="redesportada">
                        <h3>Síguenos</h3>
                        <div className="iconsportada">
                            <a href="#"><img src="facebook.png" alt="Facebook" /></a>
                            <a href="#"><img src="twiter.png" alt="Twitter" /></a>
                            <a href="#"><img src="instagram.png" alt="Instagram" /></a>
                            <a href="#"><img src="wasap.png" alt="YouTube" /></a>
                        </div>
                    </div>
        </section>
    </section>
    
</footer>





    </div>
  );
};

export default Portada;
