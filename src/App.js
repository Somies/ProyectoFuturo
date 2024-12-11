import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Entrada from './Entrada';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  // Cambiar estado a login después del registro
  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
  };

  // Cambiar estado a entrada después de login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        // Si no ha iniciado sesión, muestra el Login o el Register
        !isRegistered ? (
          <Register onRegisterSuccess={handleRegistrationSuccess} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )
      ) : (
        // Si ha iniciado sesión, muestra la página de entrada
        <Entrada />
      )}
    </div>
  );
};

export default App;
