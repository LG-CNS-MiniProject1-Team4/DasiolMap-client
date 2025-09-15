import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { HomeGuest } from "./pages/HomeGuest";
import { HomeMember } from "./pages/HomeMemeber";
<<<<<<< HEAD
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME_GUEST} element={<HomeGuest />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.HOME_MEMBER} element={<HomeMember />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
=======
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { MyMap } from "./pages/MyMap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME_GUEST} element={<HomeGuest />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.HOME_MEMBER} element={<HomeMember />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.MYMAP} element={<MyMap />} />
        </Routes>
      </BrowserRouter>
    </>
>>>>>>> fcc356924a86542761afb0dace3edf43f8324615
  );
}

export default App;
