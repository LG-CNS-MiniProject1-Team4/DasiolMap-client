// import sampleImg from "../../assets/images/homeMember/sample.jpeg";
// export const RecentItembox = () => {
//   return (
//     <div
//       className="w-[189px] h-[189px] rounded-[24px] bg-[#E86C00] relative overflow-hidden shadow-[0_0_3px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_-1px_rgba(0,0,0,0.20)]
// "
//     >
//       <img
//         src={sampleImg}
//         alt="sample"
//         className="w-full h-full object-cover rounded-[24px]"
//       />
//       <div className="w-full h-[43px] bg-[#fff] absolute bottom-0 justify-end flex text-[24px] font-medium text-[#E86C00] pr-2.5 ">
//         라쿤피자
//       </div>
//     </div>
//   );
// };

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 이거 써야 작동 함 !!!!!!!!!!!!!!!!!!!!111111

// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "../../constants/routes";

// export const RecentItembox = ({ store }) => {
//   // `store` prop이 유효한지 먼저 확인합니다.
//   if (!store) {
//     return null; // 데이터가 없으면 아무것도 렌더링하지 않습니다.
//   }

//   const navigate = useNavigate();

//   const handleBoxClick = () => {
//     navigate(`${ROUTES.DETAIL}/${store.storeId}`);
//   };

//   return (
//     <div
//       className="w-[189px] h-[189px] rounded-[24px] bg-[#EBEBEB] relative overflow-hidden shadow-[0_0_3px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_-1px_rgba(0,0,0,0.20)] cursor-pointer"
//       onClick={handleBoxClick}
//     >
//       <img
//         src={
//           // 장소의 사진 배열에서 첫 번째 사진을 가져오고, 없으면 기본 이미지 사용
//           store.photos && store.photos.length > 0
//             ? store.photos[0].photoUrl
//             : "https://placehold.co/189x189/EBEBEB/000000?text=No+Image"
//         }
//         alt={store.storeName}
//         className="w-full h-full object-cover rounded-[24px]"
//       />
//       <div className="w-full h-[43px] bg-white absolute bottom-0 justify-end flex text-[24px] font-medium text-[#E86C00] pr-2.5 items-center">
//         {store.storeName}
//       </div>
//     </div>
//   );
// };
// ///////////////////////////////////////////////////////////

// src/components/homeMember/RecentItembox.jsx

//import sampleImg from "../../assets/images/homeMember/sample.jpeg"; // 이미지가 없을 때를 대비한 기본 이미지
// src/components/homeMember/RecentItembox.jsx

// import { useNavigate } from "react-router-dom"; // useNavigate import
// import sampleImg from "../../assets/images/homeMember/sample.jpeg";

// export const RecentItembox = ({ storeId, storeName, imageUrl }) => {
//   const navigate = useNavigate(); // navigate 함수 사용 준비

//   // 클릭 시 상세 페이지로 이동하는 함수
//   const handleCardClick = () => {
//     // storeId가 있을 경우에만 이동
//     if (storeId) {
//       navigate(`/dasiolmap/detail/${storeId}`); // App.jsx에 설정된 상세 페이지 경로로 이동
//     }
//   };

//   return (
//     <div
//       onClick={handleCardClick} // div에 onClick 이벤트 핸들러 추가
//       className="w-[189px] h-[189px] rounded-[24px] bg-[#E86C00] relative overflow-hidden shadow-[0_0_3px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_-1px_rgba(0,0,0,0.20)]"
//     >
//       <img
//         src={imageUrl || sampleImg}
//         alt={storeName}
//         className="w-full h-full object-cover rounded-[24px]"
//       />
//       <div className="w-full h-[43px] bg-[#fff] absolute bottom-0 justify-end flex text-[24px] font-medium text-[#E86C00] pr-2.5 ">
//         {storeName}
//       </div>
//     </div>
//   );
// };

// // props로 storeId, storeName, imageUrl를 받습니다.
// export const recentItembox = ({ storeId, storeName, imageUrl }) => {
//   return (
//     <div
//       className="w-[189px] h-[189px] rounded-[24px] bg-[#E86C00] relative overflow-hidden shadow-[0_0_3px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_-1px_rgba(0,0,0,0.20)]
// "
//     >
//       <img
//         // props로 받은 imageUrl을 사용하고, 만약 없다면 기본 이미지를 보여줍니다.
//         src={imageUrl || sampleImg}
//         alt={storeName} // alt 속성도 동적으로 변경
//         className="w-full h-full object-cover rounded-[24px]"
//       />
//       <div className="w-full h-[43px] bg-[#fff] absolute bottom-0 justify-end flex text-[24px] font-medium text-[#E86C00] pr-2.5 ">
//         {/* props로 받은 storeName을 표시합니다. */}
//         {storeName}
//       </div>
//     </div>
//   );
// };

// ////////////////////////////////////////////////////////////

import { useNavigate } from "react-router-dom";
import sampleImg from "../../assets/images/homeMember/sample.jpeg"; // 이미지가 없을 때를 대비한 기본 이미지

// props로 storeId, storeName, imageUrl를 전달받습니다.
export const RecentItembox = ({ storeId, storeName, imageUrl }) => {
  const navigate = useNavigate();

  // 카드를 클릭하면 해당 가게의 상세 페이지로 이동하는 함수
  const handleNavigate = () => {
    if (storeId) {
      navigate(`/dasiolmap/detail/${storeId}`);
    }
  };

  return (
    <div
      onClick={handleNavigate} // 클릭 시 상세 페이지로 이동하도록 이벤트 핸들러를 추가합니다.
      className="w-[189px] h-[189px] rounded-[24px] bg-gray-200 relative overflow-hidden shadow-[0_0_3px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_-1px_rgba(0,0,0,0.20)]"
    >
      <img
        // 전달받은 imageUrl이 있으면 그 사진을, 없으면 기본 이미지를 보여줍니다.
        src={imageUrl || sampleImg}
        alt={storeName} // alt 속성도 가게 이름으로 동적으로 변경합니다.
        className="w-full h-full object-cover rounded-[24px]"
      />
      <div className="w-full h-[43px] bg-white bg-opacity-90 absolute bottom-0 justify-end flex items-center text-[24px] font-medium text-[#E86C00] pr-2.5 ">
        {/* 전달받은 storeName을 표시합니다. */}
        {storeName}
      </div>
    </div>
  );
};
