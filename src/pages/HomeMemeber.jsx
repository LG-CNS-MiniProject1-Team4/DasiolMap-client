import PageLayout from "../components/layout/PageLayout";
import banner from "../assets/images/homeMember/homebanner1.png";
import { GrayBox } from "../components/homeMember/GrayBox";
import icon1 from "../assets/icons/homeMember/grayBoxIcon1.svg";
import icon2 from "../assets/icons/homeMember/grayBoxIcon2.svg";
import icon3 from "../assets/icons/homeMember/grayBoxIcon3.svg";
import { RecentList } from "../components/homeMember/recentList";
import { SearchLocateSection } from "../components/homeMember/SearchLocateSection";
import { SearchKeywordSection } from "../components/homeMember/SearchKeywordSection";
import { useState, useEffect } from "react";
import { KeywordComponent } from "../components/homeMember/KeywordComponent";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import axios from "axios";
import { axiosInstance } from "../apis/axiosInstance";

export const HomeMember = () => {
  const [searchBy, setSearchBy] = useState(null);
  const [searchInput, setSearchInput] = useState("input");
  const [inputValue, setInputValue] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState(new Set());
  const [recentStores, setRecentStores] = useState(null); // 초기값을 null로 변경
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const username = localStorage.getItem("nickname");

  const toggleKeyword = (key) => {
    setSelectedKeywords((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
    setSearchBy("keyword");
  };

  useEffect(() => {
    const fetchRecentStores = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("/search/stores/by-date", {
          params: { sort: "desc" },
        });
        const stores = response.data.slice(0, 6);
        setRecentStores(stores);
      } catch (err) {
        console.error("Failed to fetch recent stores:", err);
        setError("최근 등록 장소를 불러오는 데 실패했습니다.");
        setRecentStores([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentStores();
  }, []);

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
              <span className="text-[#f70] font-normal">{username}님</span>
              <br />
              어떤 장소를 찾으시나요 ?
            </p>
            {/* 구분선 */}
            <div className="w-[1px] bg-[#C4C4C4] h-[178px] opacity-[0.9] mr-[60px]"></div>
            {/* 검색영역 */}
            <div className="pt-[10px]">
              <div className="flex gap-[15px] font-semibold text-[16px] cursor-pointer">
                <p
                  className={`${
                    searchInput === "input"
                      ? "text-[#E86C00] border-b-[2px]"
                      : ""
                  }`}
                  onClick={() => {
                    setSearchInput("input");
                    setSelectedKeywords(new Set());
                    setSearchKeyword("");
                  }}
                >
                  통합검색
                </p>
                <p
                  className={`${
                    searchInput === "key" ? "text-[#E86C00] border-b-[2px]" : ""
                  }`}
                  onClick={() => {
                    setSearchInput("key");
                    setSearchKeyword("");
                    setSelectedKeywords(new Set());
                  }}
                >
                  키워드 검색
                </p>
              </div>

              {searchInput === "input" ? (
                <div className="mt-7 w-[534px] h-[45px] text-[16px]">
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && inputValue.trim() !== "") {
                        setSearchBy("keyword");
                        setSearchKeyword(inputValue);
                        setInputValue("");
                      }
                    }}
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    className="border-[1px] border-[#C4C4C4] rounded-[12px] w-full h-full pl-7 placeholder:font-light placeholder:text-[#C4C4C4] focus:outline-none"
                  />
                </div>
              ) : (
                <KeywordComponent
                  selected={selectedKeywords}
                  onToggle={toggleKeyword}
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-[76px] mb-[150px] flex gap-[20px]">
          <GrayBox
            icon={icon1}
            t1="다시 올 장소"
            t2=" 위치로 찾기"
            desc="사용자들이 직접 등록한 다시 오고 싶은 맛집을 둘러보세요"
            onClick={() => setSearchBy("location")}
          />
          <GrayBox
            icon={icon2}
            t1="나만의 "
            t2="다시 올 지도"
            desc="내가 저장한 다시 오고 싶은 장소들을 둘러보세요"
            onClick={() => navigate(ROUTES.MYMAP)}
          />
          <GrayBox
            color="orange"
            icon={icon3}
            t1="다시 올 지도 "
            t2="추가하기"
            desc="나만의 다시 오고 싶은 장소를 공유해주세요"
            onClick={() => navigate(ROUTES.WRITE_POST)}
          />
        </div>

        {/* 메인영역 */}
        {searchBy === "location" ? (
          <SearchLocateSection />
        ) : searchBy === "keyword" ? (
          (searchKeyword !== "" || selectedKeywords.size > 0) && (
            <SearchKeywordSection
              mode={searchInput}
              searchKey={searchKeyword}
              selectedKeywords={[...selectedKeywords]}
            />
          )
        ) : null}

        {/* 최근 등록장소 */}
        <RecentList
          stores={recentStores} // recentStores가 null일 때도 전달
          isLoading={isLoading}
          error={error}
        />
      </PageLayout>
    </div>
  );
};
