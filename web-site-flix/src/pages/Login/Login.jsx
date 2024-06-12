import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")


  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" placeholder='Seu nome' />:<></>}
          <input type="email" placeholder='Seu Email' />
          <input type="password" placeholder='Sua senha' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Lembrar de mim</label>
            </div>
            <p>Precisa de ajuda?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?
                    <p>Novo na Iveflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign up agora</span></p>
                    :<p>Você já tem uma conta? <span onClick={()=>{setSignState("Sign In")}}>Sign in agora</span></p>
        }
        </div>
      </div>

    </div>
  )
}

export default Login