import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/user/Login';
import { Signup } from './components/user/Signup';
import { Main } from './layout/Main.js';
import { ForgotPassword } from './components/user/ForgotPassword';
import { MovieDetail } from './components/movie/MovieDetail';
import './css/styled.css';

///movies/:id/detail 추후에 경로 수정
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/detail' element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
