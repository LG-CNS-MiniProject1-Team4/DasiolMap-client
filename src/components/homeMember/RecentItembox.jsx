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

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const RecentItembox = ({ store }) => {
  // `store` prop이 유효한지 먼저 확인합니다.
  if (!store) {
    return null; // 데이터가 없으면 아무것도 렌더링하지 않습니다.
  }

  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate(`${ROUTES.DETAIL}/${store.storeId}`);
  };

  return (
    <div
      className="w-[189px] h-[189px] rounded-[24px] bg-[#EBEBEB] relative overflow-hidden shadow-[0_0_3px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_-1px_rgba(0,0,0,0.20)] cursor-pointer"
      onClick={handleBoxClick}
    >
      <img
        src={
          // 장소의 사진 배열에서 첫 번째 사진을 가져오고, 없으면 기본 이미지 사용
          store.photos && store.photos.length > 0
            ? store.photos[0].photoUrl
            : "https://placehold.co/189x189/EBEBEB/000000?text=No+Image"
        }
        alt={store.storeName}
        className="w-full h-full object-cover rounded-[24px]"
      />
      <div className="w-full h-[43px] bg-white absolute bottom-0 justify-end flex text-[24px] font-medium text-[#E86C00] pr-2.5 items-center">
        {store.storeName}
      </div>
    </div>
  );
};

// ////////////////////////////////////////////////////////////

// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "../../constants/routes";
// import pizzaImage from "../../assets/images/pizza.png";

// export const RecentItembox = ({ store }) => {
//   // `store` prop이 유효한지 먼저 확인합니다.
//   if (!store) {
//     return null; // 데이터가 없으면 아무것도 렌더링하지 않습니다.
//   }

//   const navigate = useNavigate();

//   const handleBoxClick = () => {
//     navigate(`${ROUTES.DETAIL}/${store.storeId}`);
//   };

//   // API에서 가져온 실제 사진 URL. 블로그 작성 기능이 완료되면 이 변수를 사용합니다.
//   const realPhotoUrl =
//     store.photos && store.photos.length > 0 ? store.photos[0].photoUrl : null;

//   // 임시로 사용할 로컬 이미지
//   const tempImageUrl = pizzaImage;

//   return (
//     <div
//       className="w-[189px] h-[189px] rounded-[24px] bg-[#EBEBEB] relative overflow-hidden shadow-[0_0_3px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_-1px_rgba(0,0,0,0.20)] cursor-pointer"
//       onClick={handleBoxClick}
//     >
//       <img
//         src={
//           // 블로그 작성 페이지가 완료되면 `realPhotoUrl`을 사용하세요.
//           // 현재는 임시 이미지인 `tempImageUrl`을 사용합니다.
//           tempImageUrl
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

// /////////////////////////////////////////////////////

// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "../../constants/routes";
// import pizzaImage from "../../assets/images/pizza.png";

// export const RecentItembox = ({ store }) => {
//   // `store` prop이 유효한지 먼저 확인합니다.
//   if (!store) {
//     return null; // 데이터가 없으면 아무것도 렌더링하지 않습니다.
//   }

//   const navigate = useNavigate();

//   const handleBoxClick = () => {
//     navigate(`${ROUTES.DETAIL}/${store.storeId}`);
//   };

//   // API에서 가져온 실제 사진 URL. 블로그 작성 기능이 완료되면 이 변수를 사용합니다.
//   const realPhotoUrl =
//     store.photos && store.photos.length > 0 ? store.photos[0].photoUrl : null;

//   // 임시로 사용할 로컬 이미지
//   const tempImageUrl = pizzaImage;

//   return (
//     <div
//       className="w-[189px] h-[189px] rounded-[24px] bg-[#EBEBEB] relative overflow-hidden shadow-[0_0_3px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_-1px_rgba(0,0,0,0.20)] cursor-pointer"
//       onClick={handleBoxClick}
//     >
//       <img
//         src={
//           // 블로그 작성 페이지가 완료되면 `realPhotoUrl`을 사용하세요.
//           // 현재는 임시 이미지인 `tempImageUrl`을 사용합니다.
//           tempImageUrl
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
