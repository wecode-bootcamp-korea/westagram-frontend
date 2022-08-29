import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/reset.css';
import './styles/common.scss';

import './pages/Login/Login.scss';
import Login from './pages/Login/Login';

import './pages/Main/Main.scss';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
