import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css"; 

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
      navigate('/reservas');
    }
  };

  return (
    <div className="login-page">
  <div className="login-left">
    <video
      className="login-video"
      src="../videos/mascot.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    <h1>¡Bienvenido a PetCare!</h1>
    <p>Tu lugar confiable para el cuidado de perros y gatos</p>
    <div className="login-social">
      <i className="fab fa-facebook"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-twitter"></i>
    </div>
  </div>


      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Iniciar Sesión</h2>
          <div className="input-group">
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="fas fa-envelope icon"></i>
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="fas fa-lock icon"></i>
          </div>
          <div className="login-options">
            <label>
              <input type="checkbox" /> Recordarme
            </label>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" className="login-button">Ingresar</button>
          <p className="signup-link">¿No tienes una cuenta? <a href="#">Regístrate</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
