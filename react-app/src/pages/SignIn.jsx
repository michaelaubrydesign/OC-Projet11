import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector((state) => state.user);
    console.log(user);
    const dispatch = useDispatch();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Authentication failed');
            }

            const data = await response.json();

            const token = data.body.token;

            // Autre appel api

            // Effectuer l'appel API pour obtenir les données du profil de l'utilisateur
            const profileResponse = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`, // Inclure le token dans les en-têtes
                    },
                }
            );

            if (!profileResponse.ok) {
                throw new Error('Failed to fetch user profile data');
            }

            const profileData = await profileResponse.json();
            console.log(profileData);

            dispatch({
                type: 'SET_USER',
                payload: {
                    userName: profileData.body.userName,
                    firstName: profileData.body.firstName,
                    lastName: profileData.body.lastName,
                    token: token,
                },
            });
        } catch (error) {
            // Gérer les erreurs ici
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {/* Affichez les erreurs, le cas échéant */}
                <form onSubmit={handleSignIn}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SignIn;
