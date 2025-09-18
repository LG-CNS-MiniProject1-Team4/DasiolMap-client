import { axionPublicInstance } from "./axiosInstance";
import { setAccessToken, setRefreshToken } from "../utils/token";

export const login = async (email, passwd) => {
  const res = await axionPublicInstance.post("/user/login", {
    email,
    passwd,
    nickname: email,
  });

  const accessToken =
    res.headers?.authorization?.replace(/^Bearer\s+/i, "") ?? null;

  const refreshToken = res.headers?.["refresh-token"] ?? null;

  console.log(accessToken, refreshToken);
  console.log(">>", res.headers);
  console.log(res.authorization);

  setAccessToken(accessToken);
  setRefreshToken(refreshToken);

  return {
    user: res.data ?? null,
    accessToken,
    refreshToken,
  };
};

export const signup = async (email, passwd, nickname) => {
  const res = await axionPublicInstance.post("/user/signup", {
    email,
    passwd,
    nickname,
  });
  console.log(res);
};
