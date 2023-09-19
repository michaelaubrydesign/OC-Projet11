import React from 'react'
import logo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="./sign-in.html">
          <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </a>
        </div>
      </nav>
    )
}

export default Header