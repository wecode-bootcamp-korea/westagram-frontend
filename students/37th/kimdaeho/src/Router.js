import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main2 from './pages/Main/Main2';

const Router = () => {
    return (
      <BrowserRouter>                                                                
        <Routes>                                                           
          <Route path="/" element={<Login />} />  
          <Route path='/Main' element={<Main2 />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;