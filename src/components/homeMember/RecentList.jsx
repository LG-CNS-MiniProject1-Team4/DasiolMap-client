// import { RecentItembox } from "./recentItembox";

// export const RecentList = () => {
//   const items = Array.from({ length: 12 });
//   return (
//     <div className="mb-[100px]">
//       <h3 className="text-[36px] font-semibold">최근 동록된 장소</h3>
//       <div
//         className="flex gap-4 mt-[19px] overflow-x-auto [scrollbar-width:none]
//         pb-3
//           "
//       >
//         <ul className="flex">
//           {items.map((_, index) => (
//             <li key={index} className="inline-block mr-4 cursor-pointer">
//               <RecentItembox />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// //////////////////////////////////////////////////////////////////////////////
// 이걸로 실행!!!!!!!!!!!111
// import { RecentItembox } from "./RecentItembox";

// export const RecentList = ({ stores, isLoading, error }) => {
//   return (
//     <div className="flex flex-col items-center">
//       <h3 className="text-[36px] font-semibold mb-[60px] text-center">
//         <span className="text-[#E86C00]">최근 등록된 </span>장소
//       </h3>
//       {isLoading && <p>로딩 중...</p>}
//       {error && <p className="text-red-500">{error}</p>}
//       {!isLoading && !error && stores.length === 0 && (
//         <p>최근 등록된 장소가 없습니다.</p>
//       )}
//       <div className="grid grid-cols-6 gap-[18px] w-full max-w-[1200px]">
//         {!isLoading &&
//           !error &&
//           stores.map((store) => (
//             <RecentItembox key={store.storeId} store={store} />
//           ))}
//       </div>
//     </div>
//   );
// };

// //////////////////////////////////////////////////////////////

import React from "react";
import { RecentItembox } from "./RecentItembox"; // 파일명 대소문자를 확인해주세요.

export const RecentList = ({ stores, isLoading, error }) => {
  // 로딩 중일 때 표시할 UI
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  // 에러 발생 시 표시할 UI
  if (error) {
    return <div>{error}</div>;
  }

  // 데이터가 없을 때 표시할 UI
  if (!stores || stores.length === 0) {
    return <div>최근 등록된 장소가 없습니다.</div>;
  }

  return (
    <div className="mb-[100px]">
      <h3 className="text-[36px] font-semibold">최근 등록된 장소</h3>
      <div className="flex gap-4 mt-[19px] overflow-x-auto pb-3 [scrollbar-width:none]">
        <ul className="flex">
          {/* 서버에서 받아온 stores 배열을 순회하며 RecentItembox를 렌더링합니다. */}
          {stores.map((store) => (
            <li
              key={store.storeId}
              className="inline-block mr-4 cursor-pointer"
            >
              <RecentItembox
                storeId={store.storeId}
                storeName={store.storeName}
                // store 객체의 photos 배열에서 첫 번째 사진의 URL을 imageUrl로 전달합니다.
                // 백엔드에서 전달하는 데이터 구조에 따라 이 부분은 변경될 수 있습니다.
                imageUrl={
                  store.photos && store.photos.length > 0
                    ? store.photos[0].photoUrl
                    : null
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
