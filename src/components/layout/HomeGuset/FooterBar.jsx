import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

export const FooterBar = () => {
  const navigate = useNavigate();
  return (
    <section className="h-100 mb-5 bg-gradient-to-r from-orange-500 to-orange-300 py-24 px-6 text-center">
      {/* 문구 */}
      <h2 className="text-5xl md:text-5xl font-bold text-white mb-8 leading-normal">
        잊고 싶지 않은 순간들을 기록하고 공유하며,<br />
        특별한 보물지도를 만들어보세요
      </h2>

      {/* 버튼 */}
      <button className="mt-4 bg-white text-orange-500 font-semibold px-8 py-3 rounded-full shadow hover:bg-orange-100 transition cursor-pointer"
              onClick={() => navigate(ROUTES.LOGIN)}
      >
        지금 시작하기
      </button>
    </section>
  );
};
