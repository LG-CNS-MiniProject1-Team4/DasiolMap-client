import {
  CustomOverlayMap,
  Map,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Fragment, useState } from "react";
import mapMarker from "../../assets/icons/myMap/mapMarker.svg";

import sampleImg from "../../assets/images/homeMember/sample.jpeg";
import { PlaceListBox } from "./PlaceListBox";

const sampleMapData = [
  {
    center: { lat: 33.450701, lng: 126.571644 },
    storeName: "라쿤피자1",
    tags: ["데이트", "데이트", "데이트"],
    thumbImg: sampleImg,
    rate: 4.8,
    location: "서울특별시 강남구 선릉로158길 11 (청담동)",
    opentime: "09:00",
    closetime: "17:00",
    phonenumber: "02-222-2222",
  },
  {
    center: { lat: 33.450701, lng: 126.574663 },
    storeName: "라쿤피자2",
    tags: ["데이트", "데이트", "데이트"],
    thumbImg: sampleImg,
    rate: 4.8,
    location: "서울특별시 강남구 선릉로158길 11 (청담동)",
    opentime: "09:00",
    closetime: "17:00",
    phonenumber: "02-222-2222",
  },
];

export const MapArea = () => {
  useKakaoLoader();

  const navigate = useNavigate();
  const [openSavedList, setOpenSavedList] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);

  const visible = (idx) => active === idx || hovered === idx;
  const stop = (e) => e?.domEvent?.stopPropagation?.();

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
        <div className="w-[392px] h-full z-10 bg-[#fff] top-0 absolute left-0 pt-[81px] pl-[22px] gap-[21px] flex flex-col">
          {sampleMapData.map((data, idx) => {
            let pinned = active === idx;
            return (
              <PlaceListBox
                storeName={data.storeName}
                key={idx}
                tags={data.tags}
                rate={data.rate}
                location={data.location}
                opentime={data.opentime}
                closetime={data.closetime}
                phonenumber={data.phonenumber}
                pinned={pinned}
                onClick={() => setActive(idx)}
              />
            );
          })}
        </div>
      )}

      {/* 지도 */}
      <Map
        className="w-full h-full"
        id="map"
        center={{ lat: 33.450701, lng: 126.570667 }}
        level={3}
        onClick={() => {
          setActive(null);
          // setHovered(null);
        }}
      >
        {sampleMapData.map((m, idx) => (
          <Fragment key={idx}>
            <MapMarker
              className="relative z-10"
              position={m.center}
              key={idx}
              image={{
                src: mapMarker,
                size: {
                  width: 70,
                  height: 70,
                },
              }}
              onMouseOver={() => setHovered(idx)}
              onMouseOut={() =>
                active === idx &&
                setHovered((cur) => (cur === idx ? null : cur))
              }
              onClick={(e) => {
                stop(e);
                setActive((cur) => (cur === idx ? null : idx));
              }}
            />
            {visible(idx) && (
              <CustomOverlayMap position={m.center} className="relative">
                <div
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() =>
                    setHovered((cur) => (cur === idx ? null : cur))
                  }
                  onClick={(e) => {
                    stop(e);
                    setActive(idx);
                    setOpenSavedList(true);
                  }}
                >
                  <div className="bottom-[10px] left-[-14px] absolute z-5 customoverlay w-[239px] h-[100px] bg-[#fff] rounded-[12px_12px_12px_22px] shadow-[0_0_10px_0_rgba(117,117,117,0.40)]">
                    <img //마커 & 오버레이 겹치게....!!!
                      src={mapMarker}
                      alt="mapmarker"
                      className="z-10 absolute bottom-[-11px] left-[-20px] w-[70px] h-[70px]"
                    />
                    {/* 오버레이 데이터 */}
                    <div className="flex justify-between p-[10px]">
                      <div className="flex flex-col">
                        <div className="flex text-[#E86C00] items-center align-center text-center text-[9px] gap-1">
                          {m.tags.map((t) => (
                            <p className="bg-[#FFEDD5] px-1 py-[3px] rounded-[50px]">
                              # {t}
                            </p>
                          ))}
                        </div>
                        <h4 className="mt-[12px] text-[20px] text-[#505050] font-bold flex justify-end">
                          {m.storeName}
                        </h4>
                      </div>
                      <div>
                        <img
                          src={m.thumbImg}
                          alt={m.storeName}
                          className="w-20 h-20 rounded-[12px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CustomOverlayMap>
            )}
          </Fragment>
        ))}
      </Map>
    </div>
  );
};
