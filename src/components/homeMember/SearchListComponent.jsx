import save from "../../assets/icons/homeMember/save.svg";

import sampleImg from "../../assets/images/homeMember/sample.jpeg";

const sampleData = {
  storeName: "라쿤피자",
  rating: 4.8,
  tag: ["데이트", "데이트", "데이트"],
  title: "송파 피자 맛집 공유합니다~",
};

export const SearchListComponent = () => {
  return (
    <div className="w-[394px] h-[368px] shadow-[0_0_7.6px_-1px_rgba(0,0,0,0.20)] rounded-[24px] pt-6 pb-[15px] px-[35px] text-[#E86C00] text-[32px] font-medium cursor-pointer hover:shadow-[0_0_12px_-1px_rgba(0,0,0,0.20)]">
      <div className="flex justify-between items-center">
        {sampleData.storeName}
        <div className="flex items-center gap-3">
          <div className="text-[#f70] text-[15px] font-medium shadow-[0_0_3px_rgba(0,0,0,0.25)] h-[25px] px-[6px] py-[5px] items-center flex rounded-[50px]">
            ★{sampleData.rating}
          </div>
          <img src={save} alt="save" className="cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-[229px] mt-1 relative">
        <img src={sampleImg} className=" w-full h-full object-cover" />
        <div className=" absolute bottom-[12px] left-[15px] text-[#E86C00] text-[13px] flex gap-3">
          {sampleData.tag.map((tag, index) => (
            <p
              key={index}
              className="py-[6px] px-[7px] bg-[#FFEDD5] rounded-[50px]"
            >
              #{tag}
            </p>
          ))}
        </div>
      </div>
      <div className="text-[#505050] text-[22px] mt-3 font-semibold">
        {sampleData.title}
      </div>
    </div>
  );
};
