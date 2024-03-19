import "./Login.css";

function Login() {
  return (
    <>
      <div className="loginCanvas">
      
        <div className="loginTexts">
          <label>Usuario</label>
          <br />
          <label>Contraseña</label>
        </div>
        <div className="loginInputs">
          <input type="text"></input>
          <br />
          <input type="password"></input>
        </div>
        <div className="break"></div>
        <button>
          <div className="buttonText">
            Entrar
          </div>
        </button>
      </div>
    </>
  );
}

export default Login;
