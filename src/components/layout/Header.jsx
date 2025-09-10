import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center text-[24px] text-[#FF7700] w-[100%] h-20 items-center flex justify-between pl-[85px] pr-[57.18px] bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.02)]">
      <p
        className="font-normal cursor-pointer"
        // onClick={() => navigate(ROUTES.HOME_GUEST)}
      >
        다시올지도
      </p>
      <div className="flex text-[16px] gap-11 h-[41px] items-center">
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
    </div>
  );
};
