import { RecentItembox } from "./recentItembox";

export const RecentList = () => {
  return (
    <div className="mb-[100px]">
      <h3 className="text-[36px] font-semibold">최근 동록된 장소</h3>
      <div className="flex gap-4 mt-[19px]">
        <RecentItembox />
        <RecentItembox />
        <RecentItembox />
        <RecentItembox />
        <RecentItembox />
        <RecentItembox />
      </div>
    </div>
  );
};
