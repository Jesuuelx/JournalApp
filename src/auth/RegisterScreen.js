import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
    <h3 className="auth__title">Regiter</h3>
    <form>
    <input className="auth__input" type="text" name="name" placeholder="Enter Name" autoComplete="off" />
      <input className="auth__input" type="text" name="email" placeholder="Enter Email" autoComplete="off" />
      <input className="auth__input" type="password" name="password" placeholder="Password" />
      <input className="auth__input" type="password" name="password2" placeholder="Confirm password" />


      <button className="btn btn-primary btn-block mb-5">Register</button>

      
      <Link to="/auth/login" className="link mt-5">AlReady Registerted? </Link>
    </form>
  </>
  )
}
