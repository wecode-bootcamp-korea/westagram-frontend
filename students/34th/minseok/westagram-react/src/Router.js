import React from 'react';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
