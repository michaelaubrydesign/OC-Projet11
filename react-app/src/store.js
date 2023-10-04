import { combineReducers, createStore } from 'redux';

// Import des réducteurs individuels ici
import userReducer from './reducers/userReducer';
import authReducer from './reducers/authReducer';

const reduxDevtools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

// Utilisez combineReducers pour combiner tous les réducteurs en un seul
const reducer = combineReducers({
    user: userReducer,
    auth: authReducer,
});

const store = createStore(reducer, reduxDevtools);

export default store;
