import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const isAuthenticated = user && user.token;
    const userName = user && user.userName;

    const handleSignOut = () => {
        dispatch({
            type: 'SET_USER',
            payload: {
                userName: null,
                firstName: null,
                lastName: null,
                token: null,
            },
        });
    };

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
                {isAuthenticated ? (
                    <div className="main-nav-user">
                        <span className="username">{userName}</span>
                        <Link
                            to="/"
                            className="main-nav-item"
                            onClick={handleSignOut}
                        >
                            <FontAwesomeIcon icon={faUserCircle} />

                            <span onClick={handleSignOut}>Sign Out</span>
                        </Link>
                    </div>
                ) : (
                    <Link to="/signin" className="main-nav-item">
                        <FontAwesomeIcon icon={faUserCircle} />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Header;
