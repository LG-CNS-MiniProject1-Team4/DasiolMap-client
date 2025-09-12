import { RecentItembox } from "./recentItembox";

export const RecentList = () => {
  const items = Array.from({ length: 12 });
  return (
    <div className="mb-[100px]">
      <h3 className="text-[36px] font-semibold">최근 동록된 장소</h3>
      <div
        className="flex gap-4 mt-[19px] overflow-x-auto [scrollbar-width:none]
        pb-3
          "
      >
        <ul className="flex">
          {items.map((_, index) => (
            <li key={index} className="inline-block mr-4 cursor-pointer">
              <RecentItembox />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
