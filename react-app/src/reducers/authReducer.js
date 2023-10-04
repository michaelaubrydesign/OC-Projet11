const initialState = {
    user: null, // Les informations de l'utilisateur connecté
    error: null, // Les messages d'erreur en cas d'échec de l'authentification
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                error: null, // Réinitialiser les messages d'erreur en cas de succès
            };
        case 'SIGN_IN_FAILURE':
            return {
                ...state,
                user: null, // Réinitialiser les informations de l'utilisateur en cas d'échec
                error: action.payload,
            };
        case 'SIGN_OUT':
            return {
                ...state,
                user: null, // Réinitialiser l'utilisateur à null lors de la déconnexion
            };
        default:
            return state;
    }
};

export default authReducer;
