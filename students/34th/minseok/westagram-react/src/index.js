import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login/Login';
// import Main from './pages/Main/Main';

// index.html의 id root 조작
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Login />
    {/* <Main /> */}
  </>
);
