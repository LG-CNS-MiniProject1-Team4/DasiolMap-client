// 이미지 삽입 시, png위에 css를 입히면 번거로워서 icon 이용
// powershell에서 npm install lucide-react
import { MapPin, FileText, Bookmark, Map } from "lucide-react";

const features = [
  {
    icon: <MapPin className="w-6 h-6 text-orange-400" />,
    title: "지도 기반 검색",
    description: "내 주변의 숨겨진 장소들을 지도로 한눈에 찾아보세요",
  },
  {
    icon: <FileText className="w-6 h-6 text-orange-400" />,
    title: "나만의 기록",
    description: "소중한 장소에 대한 생생한 리뷰를 사진과 함께 남겨보세요",
  },
  {
    icon: <Bookmark className="w-6 h-6 text-orange-400" />,
    title: "북마크 & 공유",
    description: "마음에 드는 장소는 북마크하고 친구들과 공유할 수 있어요",
  },
  {
    icon: <Map className="w-6 h-6 text-orange-400" />,
    title: "나만의 지도",
    description: "내가 남긴 기록과 북마크로 나만의 특별한 지도를 완성하세요",
  },
];

export const CoreFeatures = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      {/* 헤더 */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          다시올지도의 핵심 기능
        </h2>
        <p className="text-gray-500">
          나만의 지도를 만들고, 다른 사람들과 함께 특별한 장소를 발견해보세요
        </p>
      </div>

      {/* 기능 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-200 mb-4 mx-auto">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
