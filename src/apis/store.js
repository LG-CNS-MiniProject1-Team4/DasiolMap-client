import { axiosInstance } from "./axiosInstance";

export const getstoreDetail = async (storeId) => {
  const response = await axiosInstance.get(`/store/read/${storeId}`);
  console.log("API 응답 데이터:", response.data);
  return response.data;
};
