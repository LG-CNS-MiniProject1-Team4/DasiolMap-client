import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Header = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isUser = localStorage.getItem("accessToken");
  const navURL = isUser ? ROUTES.HOME_MEMBER : ROUTES.HOME_GUEST;

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsModalOpen(false);
    navigate(ROUTES.HOME_GUEST);
  };

  return (
    <>
      <div className="text-center text-[24px] text-[#FF7700] w-[100%] h-20 items-center flex justify-between pl-[85px] pr-[57.18px] bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.02)]">
        <p
          className="font-normal cursor-pointer"
          onClick={() => navigate(navURL)}
        >
          다시올지도
        </p>
        <div className="flex text-[16px] items-center">
          {!isUser ? (
            <div className="flex items-center gap-11 h-[41px]">
              <div
                className="text-[#000] cursor-pointer"
                onClick={() => navigate(ROUTES.LOGIN)}
              >
                로그인
              </div>
              <div
                className="text-white bg-[#FF7700] w-[111.818px] h-[41px] justify-center items-center flex rounded-[50px] cursor-pointer"
                onClick={() => navigate(ROUTES.SIGNUP)}
              >
                회원가입
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-11 h-[41px]">
              <div
                className="text-[#000] cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                로그아웃
              </div>
              <div
                className="text-[#f70] bg-[#FFEDD5] w-[111.818px] h-[41px] justify-center items-center flex rounded-[50px] cursor-pointer"
                onClick={() => navigate(ROUTES.MYPAGE)}
              >
                마이페이지
              </div>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-transparent flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg text-center"
            style={{ width: "503px", height: "217px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[30px] font-semibold mb-[40px] text-[#000000]">
              로그아웃
            </p>
            <div className="flex justify-center gap-[15px]">
              <button
                className="w-[188px] h-[56px] bg-[#EBEBEB] text-[#757575] rounded-[12px] font-semibold flex items-center justify-center"
                onClick={() => setIsModalOpen(false)}
              >
                취소
              </button>
              <button
                className="w-[188px] h-[56px] bg-[#FF7700] text-white rounded-[12px] font-semibold flex items-center justify-center"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
