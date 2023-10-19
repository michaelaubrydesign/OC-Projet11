const initialState = {
    userName: null,
    firstName: null,
    lastName: null,
    token: null,
};

// Définition du réducteur userReducer, qui prend l'état actuel et une action en paramètres
const userReducer = (state = initialState, action) => {
    // Utilisation d'une instruction switch pour gérer différentes actions en fonction de leur type
    switch (action.type) {
        // Si l'action a un type 'SET_USER', mettez à jour les propriétés de l'utilisateur dans l'état
        case 'SET_USER':
            return {
                ...state, // Garde toutes les propriétés de l'état inchangées
                userName: action.payload.userName,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                token: action.payload.token,
            };
        case 'UPDATE_USER':
            return {
                ...state,
                userName: action.payload.userName,
            };
        // Si l'action n'a pas de type correspondant, retournez simplement l'état actuel sans effectuer de modification
        default:
            return state;
    }
};

export default userReducer;
