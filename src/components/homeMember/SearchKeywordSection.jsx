import { SearchListComponent } from "./SearchListComponent";

export const SearchKeywordSection = ({
  mode,
  searchKey,
  selectedKeywords = [],
}) => {
  const isKeywordMode = mode === "key";

  return (
    <div className="flex flex-col items-center mb-[200px]">
      <h3 className="text-[36px] font-semibold">
        다시 올 장소 <span className="text-[#E86C00]">검색 결과</span>
      </h3>
      <p className="text-[#969696] font-light text-[16px] text-center">
        {isKeywordMode
          ? `선택하신 키워드들과 어울리는 다시 올 장소들 `
          : `' ${searchKey} ' 와 어울리는 다시 올 장소들`}
        <br />
        <p className=" text-center text-[#E86C00]">
          {isKeywordMode &&
            ` ' #${selectedKeywords.map((k) => ` ${k} `).join("#")} '`}
        </p>
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
