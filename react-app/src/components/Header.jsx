import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    src={logo}
                    alt="Argent Bank Logo"
                    className="main-nav-logo-image"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to="/signin" className="main-nav-item">
                    <FontAwesomeIcon icon={faUserCircle} />
                    Sign In
                </Link>
            </div>
        </nav>
    );
}

export default Header;
