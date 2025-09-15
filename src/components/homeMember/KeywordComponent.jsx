const keywords = [
  { keys: ["맛집", "핫플", "기억에 남는 장소"] },
  {
    label: "목적",
    keys: ["데이트", "회식", "기념일", "애견동반", "가족모임", "비즈니스모임"],
  },
  {
    label: "음식종류",
    keys: [
      "한식",
      "양식",
      "아시아음식",
      "일식",
      "중식",
      "분식",
      "카페",
      "뷔페",
      "기타",
    ],
  },
  {
    label: "분위기",
    keys: ["뷰맛집", "조용한", "모던한", "전통적인 ", "트렌디한", "이국적인"],
  },
  {
    label: "시설",
    keys: ["주차가능", "단체석", "콜키지", "룸", "1인석"],
  },
];
export const KeywordComponent = ({ selected, onToggle }) => {
  return (
    <div className="mt-[15px] ml-[-15px] flex flex-col gap-2 relative">
      {keywords.map((w, i) =>
        w.label ? (
          <div key={`row-${i}`} className="flex items-center">
            <p className="text-[#C4C4C4] text-[14px] font-semibold w-[60px] shrink-0">
              {w.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {w.keys.map((key, j) => {
                const isOn = selected.has(key);
                return (
                  <p
                    key={`${i}-${j}`}
                    onClick={() => onToggle(key)}
                    className={`py-[2px] px-[7px] rounded-[50px] text-[13px] cursor-pointer transition-colors
                      ${
                        isOn
                          ? "bg-[#FFEDD5] text-[#E86C00]"
                          : "bg-[#ECECEC] text-[#757575]"
                      }`}
                  >
                    # {key}
                  </p>
                );
              })}
            </div>
          </div>
        ) : (
          <div
            key={`row-${i}`}
            className="flex flex-wrap gap-2 absolute top-[-43px] right-40"
          >
            {w.keys.map((key, j) => {
              const isOn = selected.has(key);
              return (
                <p
                  key={`${i}-${j}`}
                  onClick={() => onToggle(key)}
                  className={`py-[3px] px-[7px] rounded-[0px] text-[13px] cursor-pointer transition-colors
                    ${
                      isOn
                        ? "bg-[#FFEDD5] text-[#E86C00]"
                        : "bg-[#ECECEC] text-[#757575]"
                    }`}
                >
                  # {key}
                </p>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};
