import PageLayout from "../components/layout/PageLayout";
import banner from "../assets/images/homeMember/homebanner1.png";
import { GrayBox } from "../components/homeMember/GrayBox";
import icon1 from "../assets/icons/homeMember/grayBoxIcon1.svg";
import icon2 from "../assets/icons/homeMember/grayBoxIcon2.svg";
import icon3 from "../assets/icons/homeMember/grayBoxIcon3.svg";
import { RecentList } from "../components/homeMember/recentList";

export const HomeMember = () => {
  return (
    <div>
      <PageLayout>
        <div className="relative flex justify-center  mx-[-112px] w-[100vw]">
          <img
            src={banner}
            alt="dasiolMap"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-[-30px] bg-[white] w-[1097px] h-[260px] left-1/2 -translate-x-1/2 rounded-[24px] pt-[47px] pl-[54px] flex">
            <p className="text-[32px] font-light pr-[54px]">
              안녕하세요, <br />
              <span className="text-[#f70] font-normal">4조화이팅님</span>
              <br />
              어떤 장소를 찾으시나요 ?
            </p>
            {/* 구분선 */}
            <div className="w-[1px] bg-[#C4C4C4] h-[178px] opacity-[0.9] mr-[60px]"></div>
            {/* 검색영역 */}
            <div className="pt-[10px]">
              <div className="flex gap-[15px] font-semibold text-[16px]">
                <p className="text-[#E86C00] border-b-[2px]">통합검색</p>
                <p>키워드 검색</p>
              </div>
              <div className="mt-7 w-[534px] h-[45px] text-[16px]">
                <input
                  placeholder="검색어를 입력해주세요"
                  className="border-[1px] border-[#C4C4C4] rounded-[12px] w-full h-full pl-7 placeholder:font-light placeholder:text-[#C4C4C4] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[76px] mb-[150px] flex gap-[20px]">
          <GrayBox
            icon={icon1}
            t1="다시 올 장소"
            t2=" 위치로 찾기"
            desc="사용자들이 직접 등록한 다시 오고 싶은 맛집을 둘러보세요"
          />
          <GrayBox
            icon={icon2}
            t1="나만의 "
            t2="다시 올 지도"
            desc="내가 저장한 다시 오고 싶은 장소들을 둘러보세요"
          />
          <GrayBox
            color="orange"
            icon={icon3}
            t1="다시 올 지도 "
            t2="추가하기"
            desc="나만의 다시 오고 싶은 장소를 공유해주세요"
          />
        </div>

        <RecentList />
      </PageLayout>
    </div>
  );
};
