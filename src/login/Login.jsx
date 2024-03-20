import "./Login.css";

function Login() {
  return (
    <>
      <div className="loginCanvas">
      <div className="loginTitle">Welcome to SGH</div>
      <div className="loginSubtitle">Para aprovechar al máximo el sistema te recomendamos crear una cuenta.</div>
      <div className="break"></div>
        <div className="loginTexts">
          <label>Usuario</label>
          <br />
          <label>Contraseña</label>
        </div>
        <div className="loginInputs">
          <input className="loginInputText" type="text"></input>
          <br />
          <input className="loginInputPassword" type="password"></input>
        </div>
        <button>
          <div className="loginButtonText">
            Entrar
          </div>
        </button>
        <div className="break"></div>
        <div>
          <a href="">Forgot password?&nbsp;</a>
          <a>|</a>
          <a href="">&nbsp;Create account</a>
        </div>
      </div>
    </>
  );
}

export default Login;
