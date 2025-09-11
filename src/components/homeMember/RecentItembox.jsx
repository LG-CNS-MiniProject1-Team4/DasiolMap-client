import sampleImg from "../../assets/images/homeMember/sample.jpeg";
export const RecentItembox = () => {
  return (
    <div
      className="w-[189px] h-[189px] rounded-[24px] bg-[#E86C00] relative overflow-hidden shadow-[0_0_3px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_-1px_rgba(0,0,0,0.20)]
"
    >
      <img
        src={sampleImg}
        alt="sample"
        className="w-full h-full object-cover rounded-[24px]"
      />
      <div className="w-full h-[43px] bg-[#fff] absolute bottom-0 justify-end flex text-[24px] font-medium text-[#E86C00] pr-2.5 ">
        라쿤피자
      </div>
    </div>
  );
};
