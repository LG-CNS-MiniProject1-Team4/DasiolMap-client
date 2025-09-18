import { login } from "../apis/auth";
import { setAccessToken, setRefreshToken } from "../utils/token";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export const useLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, passwd) => {
    const { user, accessToken, refreshToken } = await login(email, passwd);

    if (accessToken) setAccessToken(accessToken);
    if (refreshToken) setRefreshToken(refreshToken);

    console.log("로그인 성공 data:", user.nickname);
    localStorage.setItem("nickname", user.nickname);
    navigate(ROUTES.HOME_MEMBER);
  };

  return { handleLogin };
};
