import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/user/Login";
import { Signup } from "./components/user/Signup";
import { Main } from "./layout/Main.js";
import { FindPwd } from "./components/FindPwd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/findpwd" element={<FindPwd />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
