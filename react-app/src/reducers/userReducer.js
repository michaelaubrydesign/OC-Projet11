const initialState = {
    userName: null,
    firstName: null,
    lastName: null,
    token: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                userName: action.payload.userName,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                token: action.payload.token,
            };
        default:
            return state;
    }
};

export default userReducer;
