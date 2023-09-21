import React, { useState } from 'react';
import Account from '../components/Account';

function Dashboard() {
    // État local pour gérer l'affichage du formulaire d'édition
    const [isEditing, setIsEditing] = useState(false);

    // Données utilisateur
    const [userData, setUserData] = useState({
        userName: 'Iron',
        firstName: 'Tony',
        lastName: 'Stark',
    });

    // Fonction pour gérer le clic sur le bouton "Edit Name"
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Fonction pour gérer le clic sur le bouton "Save"
    const handleSaveClick = () => {
        // Logique de sauvegarde des données du formulaire
        // Mettez à jour l'état local userData avec les nouvelles valeurs

        // Mise à jour des données du formulaire
        const updatedUserData = {
            userName: document.getElementById('edit-username').value,
        };

        setUserData(updatedUserData);

        // Masquez le formulaire d'édition
        setIsEditing(false);
    };

    // Fonction pour gérer le clic sur le bouton "Cancel"
    const handleCancelClick = () => {
        // Réinitialisez les champs du formulaire avec les valeurs actuelles
        // et masquez le formulaire d'édition
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
                                defaultValue={userData.userName}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="firstname">First name:</label>
                            <input
                                type="text"
                                id="firstname"
                                defaultValue={userData.firstName}
                                disabled
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastname">Last name:</label>
                            <input
                                type="text"
                                id="lastname"
                                defaultValue={userData.lastName}
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
