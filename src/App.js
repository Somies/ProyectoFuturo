import React from 'react';
import Portada from './portada.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicial from './INICIAL/inicial';
import Ingles from './INGLES/ingles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/portada" element={<Portada />} />
        <Route path="/ingles" element={<Ingles />} />
      </Routes>
    </Router>
  );
}

export default App;
