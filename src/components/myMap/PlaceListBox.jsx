import phoneIcon from "../../assets/icons/myMap/phone.svg";
import shareIcon from "../../assets/icons/myMap/share.svg";

export const PlaceListBox = ({
  storeName,
  tags,
  rate,
  location,
  opentime,
  closetime,
  phonenumber,
  pinned,
  onClick,
}) => {
  return (
    <div
      className={`w-[349px] h-[157px]  rounded-[12px] pl-8 pr-4 pt-[13px] cursor-pointer ${
        pinned
          ? "shadow-[0_0_7.6px_-1px_#F70]"
          : "shadow-[0_0_7.6px_-1px_rgba(0,0,0,0.20)]"
      } relative`}
      onClick={onClick}
    >
      <img
        src={shareIcon}
        className=" absolute bottom-[13px] right-[13px] bg-[#FFEDD5] p-[3px] pb-[5px] rounded-full"
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: "내 웹사이트",
              text: "내가 발견한 특별한 장소를 다시 찾아갈 수 있도록",
              url: window.location.href,
            });
          } else {
            alert("이 브라우저는 기본 공유 기능을 지원하지 않습니다.");
          }
        }}
      />
      <div className="flex justify-between">
        <div>
          <h4 className="text-[32px] font-semibold text-[#505050]">
            {storeName}
          </h4>
          <div className="text-[13px] text-[#E86C00] font-light flex">
            {tags.map((t) => (
              <p className="mr-[3px]"># {t}</p>
            ))}
          </div>
        </div>
        <p className="text-[#E86C00] bg-[#ECECEC] w-[40px] h-[18px] text-[12px] rounded-[50px] text-center p-1 pt-[5px] flex items-center">
          ★{rate}
        </p>
      </div>
      <div className="flex flex-col text-[#757575] align-center text-[13px]">
        <p className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
          >
            <path
              d="M6.0791 7.5C5.2541 7.5 4.5791 6.825 4.5791 6C4.5791 5.175 5.2541 4.5 6.0791 4.5C6.9041 4.5 7.5791 5.175 7.5791 6C7.5791 6.825 6.9041 7.5 6.0791 7.5ZM10.5791 6.15C10.5791 3.4275 8.5916 1.5 6.0791 1.5C3.5666 1.5 1.5791 3.4275 1.5791 6.15C1.5791 7.905 3.0416 10.23 6.0791 13.005C9.1166 10.23 10.5791 7.905 10.5791 6.15ZM6.0791 0C9.2291 0 12.0791 2.415 12.0791 6.15C12.0791 8.64 10.0766 11.5875 6.0791 15C2.0816 11.5875 0.0791016 8.64 0.0791016 6.15C0.0791016 2.415 2.9291 0 6.0791 0Z"
              fill="#757575"
            />
          </svg>
          <p>{location}</p>
        </p>
        <p className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
          >
            <path
              d="M6.93473 12.3332C7.62417 12.3332 8.30686 12.1974 8.94382 11.9335C9.58078 11.6697 10.1595 11.283 10.647 10.7955C11.1346 10.308 11.5213 9.72922 11.7851 9.09226C12.0489 8.4553 12.1847 7.77261 12.1847 7.08317C12.1847 6.39373 12.0489 5.71104 11.7851 5.07408C11.5213 4.43712 11.1346 3.85837 10.647 3.37086C10.1595 2.88335 9.58078 2.49664 8.94382 2.2328C8.30686 1.96897 7.62417 1.83317 6.93473 1.83317C5.54235 1.83317 4.20699 2.38629 3.22242 3.37086C2.23786 4.35543 1.68473 5.69078 1.68473 7.08317C1.68473 8.47556 2.23786 9.81091 3.22242 10.7955C4.20699 11.78 5.54235 12.3332 6.93473 12.3332ZM13.3514 7.08317C13.3514 10.6269 10.4785 13.4998 6.93473 13.4998C3.39098 13.4998 0.518066 10.6269 0.518066 7.08317C0.518066 3.53942 3.39098 0.666504 6.93473 0.666504C10.4785 0.666504 13.3514 3.53942 13.3514 7.08317ZM8.68473 9.658L6.3514 7.32467V3.2915H7.51807V6.84167L9.50957 8.83317L8.68473 9.658Z"
              fill="#757575"
              stroke="#757575"
              stroke-width="0.2"
            />
          </svg>
          <p>{`${opentime} ~ ${closetime}`}</p>
        </p>
        <p className="flex items-center gap-1">
          <img src={phoneIcon} />
          <p>{phonenumber}</p>
        </p>
      </div>
    </div>
  );
};
