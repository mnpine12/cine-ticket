import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/styled.css';

import { Login } from './components/user/Login';
import { Signup } from './components/user/Signup';
import { Main } from './layout/Main.js';
import { ForgotPassword } from './components/user/ForgotPassword';
import { MovieDetail } from './components/movie/MovieDetail';
import { MovieChart } from './components/movie/MovieChart';
import { MovieComingSoon } from './components/movie/MovieComingSoon';
import { MovieList } from './components/movie/MovieList';
import { BookingMain } from './components/booking/BookingMain';
import { SeatBooking } from './components/seatBooking/SeatBooking';
import { UserInfo } from './components/user/UserInfo';

///movies/:id/detail 추후에 경로 수정
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/myPage' element={<UserInfo />} />
        <Route path='/movie' element={<MovieList />}>
          <Route path='boxOffice' element={<MovieChart />} />
          <Route path='comingSoon' element={<MovieComingSoon />} />
        </Route>
        <Route path='/booking' element={<BookingMain />} />
        <Route path='/seatBooking' element={<SeatBooking />} />
        <Route path='/detail/:movieId' element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
