import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Account from '../components/Account';

function Dashboard() {
    const dispatch = useDispatch();
    // État local pour gérer l'affichage du formulaire d'édition
    const [isEditing, setIsEditing] = useState(false);

    const user = useSelector((state) => state.user);

    // Données utilisateur
    const [userData, setUserData] = useState({
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
    });

    console.log(user);

    const handleEditClick = () => {
        setUserData({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
        });
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // Mise à jour des données du formulaire
        const updatedUserData = {
            ...userData,
            userName: document.getElementById('username').value,
        };

        dispatch({
            type: 'UPDATE_USER',
            payload: updatedUserData,
        });

        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                {isEditing ? (
                    <>
                        <h1>Edit user info</h1>
                    </>
                ) : (
                    <>
                        <h1>
                            Welcome back
                            <br />
                            {`${userData.firstName} ${userData.lastName}`}
                        </h1>
                    </>
                )}
                {isEditing ? (
                    <form className="userinfo-edit">
                        <div className="input-wrapper">
                            <label htmlFor="username">User name:</label>
                            <input
                                type="text"
                                id="username"
                                value={userData.userName}
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        userName: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="firstname">First name:</label>
                            <input
                                type="text"
                                id="firstname"
                                value={userData.firstName}
                                disabled
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastname">Last name:</label>
                            <input
                                type="text"
                                id="lastname"
                                value={userData.lastName}
                                disabled
                            />
                        </div>
                        <button
                            className="edit-button"
                            onClick={handleSaveClick}
                        >
                            Save
                        </button>
                        <button
                            className="edit-button"
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </button>
                    </form>
                ) : (
                    <button className="edit-button" onClick={handleEditClick}>
                        Edit Name
                    </button>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance"
            />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
            />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
            />
        </main>
    );
}

export default Dashboard;
