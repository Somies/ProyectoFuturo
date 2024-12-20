import React, { useState } from 'react';
import './cabecera.css';
import './portada.css';

const Portada = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
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
                  Programación
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




    </div>
  );
};

export default Portada;
