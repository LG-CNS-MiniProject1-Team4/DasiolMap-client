import { SearchListComponent } from "./SearchListComponent";

export const SearchKeywordSection = ({ searchKey }) => {
  return (
    <div className="flex flex-col items-center mb-[200px]">
      <h3 className="text-[36px] font-semibold">
        다시 올 장소 <span className="text-[#E86C00]">검색 결과</span>
      </h3>
      <p className="text-[#969696] font-light text-[16px]">
        ' {searchKey} ' 와 어울리는 다시 올 장소들
      </p>

      <div className="mt-[57px] grid grid-cols-3 gap-[17px]">
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
