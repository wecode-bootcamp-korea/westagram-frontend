import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.css';
import './styles/common.css';

// import './pages/Login/Login.css';
// import Login from './pages/Login/Login';

import './pages/Main/Main.css';
import Main from './pages/Main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Login />);
root.render(<Main />);
