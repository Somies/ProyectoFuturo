import React, { useState } from 'react';
import './cabecera.css';
import './portada.css';
import './pie.css';

const Portada = () => {
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
      <nav>
        <section className="cabeza1">
          <section className="sub1cabeza1">
            <div className="logosub1cabeza1">
              <img src="/logo.jpg" alt="logo" />
            </div>
            <section className="cuentasub1cabeza1">
              <img src="/cuenta.png" alt="cuenta" />
              <a className="nav-link" href="xd">Cuenta</a>
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
              <a href="xd">Inicial</a>
              <a href="xd">Primaria</a>
              <a href="xd">Secundaria</a>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Inglés
                </a>
                <ul className="dropdown-menu">
                  <a className="dropdown-item" href="#">Básico</a>
                  <a className="dropdown-item" href="#">Intermedio</a>
                  <a className="dropdown-item" href="#">Avanzado</a>
                </ul>
              </div>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SoftEd
                </a>
                <ul className="dropdown-menu">
                  <a className="dropdown-item" href="#">Front-end</a>
                  <a className="dropdown-item" href="#">Backend</a>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </nav>

      <main className="cuerpo">
        <section className="sub1cuerpo">
          <section className='espaciosub1cuerpo'></section>
          <section className="cuadro1sub1cuerpo">
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
    <section className="pie">
        <section className="sub1pie">
            {/* Información general */}
            <div className="info">
                <h3>Sobre Nosotros</h3>
                <p>
                    Enseñamos cursos gratuitos para inicial, primaria, secundaria, inglés y programación (frontend-backend).
                </p>
                {/* Texto adicional */}
                <p className={mostrarContenido ? "mostrar" : "ocultar"}>
                    {/* Enlaces rápidos */}
                <div className='informacion'>
                    <div className="enlaces">
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
                    <div className="redes">
                        <h3>Síguenos</h3>
                        <div className="icons">
                            <a href="#"><img src="../facebook.png" alt="Facebook" /></a>
                            <a href="#"><img src="twiter.png" alt="Twitter" /></a>
                            <a href="#"><img src="instagram.png" alt="Instagram" /></a>
                            <a href="#"><img src="wasap.png" alt="YouTube" /></a>
                        </div>
                    </div>
                    </div>
                </p>
                {/* Flecha para mostrar/ocultar el contenido */}
                <span className="flecha" onClick={toggleContenido}>
                    {mostrarContenido ? "▲" : "▼"}
                </span>
            </div>
            <div className="enlaces">
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
                    <div className="redes">
                        <h3>Síguenos</h3>
                        <div className="icons">
                            <a href="#"><img src="../facebook.png" alt="Facebook" /></a>
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
