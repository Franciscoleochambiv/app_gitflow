import React, { useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { login as loginAuth } from "../utils/auth"; // Asegúrate de tener esta función
import PropTypes from "prop-types";
import Swal from 'sweetalert2';


const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      //setErrorMsg("Por favor completa todos los campos");
      Swal.fire({
        icon: 'error',
        title: 'Acceso denegado',
        text: 'Porfavor completa todos los campos',
        confirmButtonColor: '#d33'
      });
      return;
    }

    const result = loginAuth(email, password);
    if (result.success) {
        onLogin(email, password);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Acceso denegado',
          text: 'Credenciales inválidas. Por favor, inténtalo de nuevo.',
          confirmButtonColor: '#d33'
        });
      }
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="Login background" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-center">
            <h2>Bienvenido!</h2>
            <p>Ingrese sus datos</p>

            {errorMsg && (
              <div className="mb-2 text-sm text-red-600">{errorMsg}</div>
            )}

            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Usuario"
                value={email}
                onChange={(e) => {
                  setErrorMsg("");
                  setEmail(e.target.value);
                }}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setErrorMsg("");
                    setPassword(e.target.value);
                  }}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(false)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(true)} />
                )}
              </div>

            
              <div className="login-center-buttons">
                <button type="button" onClick={handleLogin}>
                  Ingresar
                </button>
                
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
