import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function SignIn() {
    // Hook useState pour gérer l'état des champs de formulaire
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Hook useSelector pour extraire l'état utilisateur de Redux
    const user = useSelector((state) => state.user);
    console.log(user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fonction de gestion de la soumission du formulaire
    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            // Appel API pour l'authentification de l'utilisateur
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

            // Vérifie si la requête est réussie
            if (!response.ok) {
                throw new Error('Authentication failed');
            }

            // Extrais le token du corps de la réponse
            const data = await response.json();
            const token = data.body.token;

            // Appel API pour obtenir les données du profil de l'utilisateur
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

            // Extrais les données du profil de la réponse
            const profileData = await profileResponse.json();
            console.log(profileData);

            // Dispatch de l'action 'SET_USER' pour mettre à jour l'état de l'utilisateur dans Redux
            dispatch({
                type: 'SET_USER',
                payload: {
                    userName: profileData.body.userName,
                    firstName: profileData.body.firstName,
                    lastName: profileData.body.lastName,
                    token: token,
                },
            });

            navigate('/dashboard');
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
