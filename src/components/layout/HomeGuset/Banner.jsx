import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import homeBanner from "../../../assets/images/HomeBanner.png";

export const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-[100%] h-[770px] flex items-center justify-center text-center bg-cover bg-center">
      <div className=" w-full h-full">
        <img src={homeBanner} className="w-full h-[770px]" />
      </div>
      <div className=" z-10 text-black absolute">
        <h1 className="text-6xl font-bold">
          내가 발견한 <span className="text-orange-400">특별한 장소</span>를
          <br />
          다시 찾아갈 수 있도록
        </h1>
        <div className="text-gray-600 font-light text-[20px]">
          <br />
          맛집, 카페, 핫플레이스를 기록하고 공유하는 지도 기반 플랫폼
          <br />
        </div>
        <button
          className="mt-7 bg-orange-500 text-white px-[30px] py-5 rounded-[50px] text-[24px] cursor-pointer hover:bg-orange-300 font-semibold"
          onClick={() => navigate(ROUTES.LOGIN)}
        >
          지금 시작하기
        </button>
      </div>
    </section>
  );
};
