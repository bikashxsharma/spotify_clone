import React from 'react'
import { accessUrl } from "../../util/spotify"
import './style.css'

function Login() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="spoitfy logo" className="login__logo"
        />

        <a href={accessUrl}>LOGIN WITH SPOITFY</a>


      </div>


    </div>
  )
}

export default Login
