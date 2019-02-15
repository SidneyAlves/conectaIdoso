import React from "react";
import { Link } from "react-router-dom";

const Registrar = ({ history, registerUser = f => f }) => {
  let _email, _password, _name;

  const handleLogin = e => {
    e.preventDefault();

    registerUser(_name.value, _email.value, _password.value);
  };
  return (
    <div id="main">
      <form id="login-form" action="" onSubmit={handleLogin} method="post">
        <h3 style={{ padding: 15 }}>Formulário de Registro</h3>
        <input ref={input => (_name = input)} style={styles.input} autoComplete="off" id="email-input" name="email" type="text" className="center-block" placeholder="Name" />
        <input ref={input => (_email = input)} style={styles.input} autoComplete="off" id="email-input" name="email" type="text" className="center-block" placeholder="email" />
        <input ref={input => (_password = input)} style={styles.input} autoComplete="off" id="password-input" name="password" type="password" className="center-block" placeholder="password" />
        <button type="submit" style={styles.button} className="landing-page-btn center-block text-center" id="email-login-btn" href="#facebook" >
          Register
        </button>

        <Link style={styles.link} to="/admin">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Registrar;