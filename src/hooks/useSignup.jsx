import { useNavigate } from "react-router-dom";
import { signup } from "../apis/auth";
import { ROUTES } from "../constants/routes";

export const useSignup = () => {
  const navigate = useNavigate();
  const handleSignup = async (email, passwd, nickname) => {
    const res = await signup(email, passwd, nickname);
    console.log(res);
    navigate(ROUTES.LOGIN);
  };
  return { handleSignup };
};
