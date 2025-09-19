import { axiosInstance } from "../apis/axiosInstance";

export const addBookmark = async (storeId, userEmail) => {
  const requestBody = {
    storeId,
    userEmail,
  };

  const response = await axiosInstance.post(
    "/user/bookmark/register",
    requestBody
  );
  return response.data;
};
