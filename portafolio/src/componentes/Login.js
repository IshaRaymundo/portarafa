import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import 'jquery';


function Login() {
  const [datos, setDatos] = useState({
    nombre: "",
    contrasena: "",
    autenticado: false,
  });

  const iniciarSesion = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión...");
    localStorage.setItem("elusuario", datos.usuario);
    localStorage.setItem("logueado", true);
    setDatos({ ...datos, autenticado: true });
  }

  const cerrarSesion = () => {
    localStorage.clear();
    setDatos({ ...datos, autenticado: false });
  }

  return (
    <div className="container">
      {datos.autenticado ? (
        <>
          <button className="btn red" onClick={cerrarSesion}>Salir</button>
        </>
      ) : (
        <form onSubmit={iniciarSesion}>
          <div className="input-field">
            <input type="text" id="usuario" placeholder="" onChange={(e) => { setDatos({ ...datos, usuario: e.target.value }) }} />
            <label htmlFor="usuario">Usuario</label>
          </div>
          <div className="input-field">
            <input type="password" id="contrasena" placeholder="" onChange={(e) => { setDatos({ ...datos, contrasena: e.target.value }) }} />
            <label htmlFor="contrasena">Contraseña</label>
          </div>
          <button className="btn" type="submit">Iniciar sesión</button>
        </form>
      )}
    </div>
  );
}

export default Login;
