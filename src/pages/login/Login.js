import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Web</h3>
          <span className="loginDesc">
            Connect With friends and the world around you on social Web
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Pasword" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Passwold?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
