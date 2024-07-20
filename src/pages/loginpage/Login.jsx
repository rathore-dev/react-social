import "./login.css"

export const Login = props => {
  return (
   <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
          <h3 className="loginLogo">Grandsocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Grandsocial.
          </span>  
          <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Username" className="loginInput" />
          <input placeholder="Password" className="loginInput" />
          <button className="loginButton">Log In</button>
          <span className="loginForgot">Forgot Password</span>
          <button className="loginRegisterButton">Create a New Account</button>
        </div>
      </div> 
      </div>
      
      
    </div>
   </div>
  )
}