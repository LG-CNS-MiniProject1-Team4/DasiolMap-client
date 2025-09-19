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

import { RecentItembox } from "./RecentItembox";

export const RecentList = ({ stores, isLoading, error }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-[36px] font-semibold mb-[60px] text-center">
        <span className="text-[#E86C00]">최근 등록된 </span>장소
      </h3>
      {isLoading && <p>로딩 중...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && stores.length === 0 && (
        <p>최근 등록된 장소가 없습니다.</p>
      )}
      <div className="grid grid-cols-6 gap-[18px] w-full max-w-[1200px]">
        {!isLoading &&
          !error &&
          stores.map((store) => (
            <RecentItembox key={store.storeId} store={store} />
          ))}
      </div>
    </div>
  );
};
