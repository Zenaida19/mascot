import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Reservas from './components/Reservas';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      <Route
        path="/reservas"
        element={isLoggedIn ? <Reservas /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
