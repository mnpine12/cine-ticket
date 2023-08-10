import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/styled.css";
import { Login } from "./components/user/Login";
import { Signup } from "./components/user/Signup";
import { Main } from "./layout/Main.js";
import { FindPwd } from "./components/FindPwd";
import { MovieDetail } from "./components/movie/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/findpwd" element={<FindPwd />}></Route>
        <Route path="/moviedetail" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
