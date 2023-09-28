import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
