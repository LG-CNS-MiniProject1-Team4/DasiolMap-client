import next from "../../assets/icons/homeMember/next.svg";
import whiteNext from "../../assets/icons/homeMember/whiteNext.svg";

export const GrayBox = ({
  icon,
  t1,
  t2,
  desc,
  color = "none",
  onClick = null,
}) => {
  return (
    <div
      className={`cursor-pointer flex-1 h-[132px] rounded-[12px] pt-[22px] pl-[26px] text-[20px] font-semibold flex flex-col gap-[23px] ${
        color === "orange"
          ? "bg-[#FF9B41] text-[#FFF]"
          : "bg-[#ECECEC] text-[#757575] "
      }`}
      onClick={onClick}
    >
      <div className=" flex justify-between pr-[13px] items-center">
        <p className="flex">
          {icon && <img src={icon} className="w-[25px] mr-[10px]" alt="icon" />}
          {t1}{" "}
          <span
            className={` ml-[5px] ${
              color === "orange" ? "text-[#FFEDD5]" : "text-[#F70]"
            }`}
          >
            {t2}
          </span>
        </p>

        {color === "orange" ? (
          <img src={whiteNext} alt="next" />
        ) : (
          <img src={next} alt="next" />
        )}
      </div>
      <p className="text-[15px] font-light ">{desc}</p>
    </div>
  );
};
