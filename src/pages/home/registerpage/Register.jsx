import "./register.css"

export default function register() {
  return (
   <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
          <h3 className="loginLogo">Grandsocial</h3>
          <span className="loginDesc">
            Registration Page
          </span>  
          <div className="loginRight">
        <div className="loginBox">
          <input placeholder=" Username" className="loginInput" />
          <input placeholder=" Email" className="loginInput" />
          <input placeholder=" Password" className="loginInput" />
          <input placeholder=" Password Again" className="loginInput" />
          <button className="loginButton">Sing In</button>
          <button className="loginRegisterButton">Log into Account</button>
        </div>
      </div> 
      </div>
      
      
    </div>
   </div>
  )
}
