import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useState } from "react";
import mapMarker from "../../assets/icons/myMap/mapMarker.svg";

const sampleMapData = [
  { center: { lat: 33.450701, lng: 126.571644 } },
  { center: { lat: 33.450701, lng: 126.570663 } },
];

export const MapArea = () => {
  useKakaoLoader();

  const navigate = useNavigate();
  const [openSavedList, setOpenSavedList] = useState(false);

  return (
    <div className="mx-[-112px] h-[calc(100vh-153px)] relative">
      <div className="absolute top-7 left-[22px] flex gap-3">
        <div
          className=" cursor-pointer z-20  flex gap-2 items-center text-[#FFFDFB] bg-[#FF7700] pl-3 pr-8 py-1.5 font-semibold rounded-[12px]"
          onClick={() => navigate(ROUTES.HOME_MEMBER)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M8.25261 15.5093L9.45581 14.2201L3.09606 7.77444L9.45581 1.32874L8.25261 0.0396047L0.517777 7.77444L8.25261 15.5093Z"
              fill="#FFFDFB"
            />
          </svg>
          <p>메인 홈</p>
        </div>
        <div
          className=" cursor-pointer z-20 flex gap-2 items-center text-[#3C3C3C] bg-[#FFC982] pl-3 pr-6 py-1.5 font-semibold rounded-[12px]"
          onClick={() => setOpenSavedList((crr) => !crr)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M8.25261 15.5093L9.45581 14.2201L3.09606 7.77444L9.45581 1.32874L8.25261 0.0396047L0.517777 7.77444L8.25261 15.5093Z"
              fill="#3C3C3C"
            />
          </svg>
          <p>저장 목록</p>
        </div>
      </div>
      {/* 저장목록 */}

      {openSavedList && (
        <div className="w-[392px] h-full z-10 bg-[#fff] top-0 absolute left-0 pt-[81px] pl-[22px]">
          d
        </div>
      )}

      {/* 지도 */}
      <Map
        className="w-full h-full"
        id="map"
        center={{ lat: 33.450701, lng: 126.570667 }}
        level={3}
      >
        {sampleMapData.map((m, idx) => (
          <MapMarker
            position={m.center}
            key={idx}
            image={{
              src: mapMarker,
              size: {
                width: 70,
                height: 70,
              },
            }}
          />
        ))}
      </Map>
    </div>
  );
};
