import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { HomeGuest } from "./pages/HomeGuest";
import { HomeMember } from "./pages/HomeMemeber";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME_GUEST} element={<HomeGuest />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.HOME_MEMBER} element={<HomeMember />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
