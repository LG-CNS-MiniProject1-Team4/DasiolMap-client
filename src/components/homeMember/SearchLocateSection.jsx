import { useState } from "react";
import nearMe from "../../assets/icons/homeMember/nearMe.svg";
import { SearchListComponent } from "./SearchListComponent";

export const SearchLocateSection = () => {
  const placeList = ["내주변", "인천", "경기", "서울", "강원", "제주"];
  const [location, setLocation] = useState("내주변");

  return (
    <div className="flex flex-col items-center mb-[200px]">
      <h3 className="text-[36px] font-semibold">
        위치로 찾는 <span className="text-[#E86C00]">다시 올 장소</span>
      </h3>
      <p className="text-[#969696] font-light text-[16px]">
        선택한 장소의 다시 올 장소들을 둘러보세요
      </p>

      <div className="flex mt-[34px] text-[#757575] text-[28px] font-semibold gap-[25px]">
        {placeList.map((place, index) => (
          <div
            className={`w-[156px] h-[156px] flex flex-col gap-[5px] rounded-full justify-center items-center cursor-pointer ${
              place === location
                ? "shadow-[0_0_7.6px_-1px_#F70] "
                : "shadow-[0_0_7.6px_-1px_rgba(0,0,0,0.20)] "
            }`}
            key={index}
            onClick={() => setLocation(place)}
          >
            {place === "내주변" && (
              <img src={nearMe} alt="nearMe" className="w-8" />
            )}
            {place}
          </div>
        ))}
      </div>

      <div className="mt-[57px] grid grid-cols-3 gap-[17px]">
        <SearchListComponent />
        <SearchListComponent />
        <SearchListComponent />
        <SearchListComponent />
        <SearchListComponent />
        <SearchListComponent />
        <SearchListComponent />
        <SearchListComponent />
      </div>
    </div>
  );
};
