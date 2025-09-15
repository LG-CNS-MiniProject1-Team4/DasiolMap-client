import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { HomeGuest } from "./pages/HomeGuest";
import { HomeMember } from "./pages/HomeMemeber";
import  Login  from "./pages/Login";
import  SignUp  from "./pages/SignUp";
import { MyMap }  from "./pages/MyMap";

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
  );
}

export default App;
