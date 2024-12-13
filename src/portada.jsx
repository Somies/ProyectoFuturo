// portada.jsx

import React from 'react';
import './cabecera.css';

const Portada = () => {
  return (
    <div>
      <nav>
      <section className='cabeza1'>
      <section className='sub1cabeza1'>
  <ul>
    <li><a href="#home">Inicial</a></li>
    <li><a href="#about">Primaria</a></li>
    <li><a href="#services">Secundaria</a></li>
    
    {/* Dropdown */}
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Programación
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Front-end</a></li>
        <li><a className="dropdown-item" href="#">Backend</a></li>
      </ul>
    </li>
  </ul>
</section>

      </section>

      </nav>

      
      <main >
        <h1></h1>
        <p></p>
      </main>

     
      <footer >
        <p></p>
      </footer>
    </div>
  );
}

// Simple styles for the layout


export default Portada;
