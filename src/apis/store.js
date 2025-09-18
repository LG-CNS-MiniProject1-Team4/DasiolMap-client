// import { axiosInstance } from "./axiosInstance";

// export const getstoreDtail = async () => {
//   const data = await axiosInstance.get("/store/read/${storeId}", {});
//   // console.log(data);
//   return data;
// };

import { create } from "zustand";
import { axiosInstance } from "./axiosInstance";
export const useStore = create((set) => ({
  data: {},
  user: null,
  posts: [],
  isLoading: false,
  error: null,

  // 사용자 정보 업데이트
  setUser: (userData) => set({ user: userData }),

  // 블로그 글 목록을 불러오는 비동기 액션
  fetchPosts: async () => {
    set({ isLoading: true, error: null });
    try {
      // API 엔드포인트는 예시입니다. 실제 API URL에 맞게 수정해야 합니다.
      const response = await axiosInstance.get("/store/read/${storeId}");
      set({ posts: response.data, isLoading: false });
    } catch (error) {
      set({ error: "게시글을 불러오는 데 실패했습니다.", isLoading: false });
      console.error("Error fetching posts:", error);
    }
  },
}));

export const getstoreDetail = async (storeId) => {
  const data = await axiosInstance.get(``, {});
  console.log(data.data);
  return data.data;
};
