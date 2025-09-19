import { useEffect, useState, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import PageLayout from "../components/layout/PageLayout";
import { getstoreDetail } from "../apis/store";

// 아이콘 및 이미지 임포트
import BackOrangeIcon from "../assets/icons/detailPage/backOrange.svg";

import saveIcon from "../assets/icons/homeMember/save.svg";
import storeIcon1 from "../assets/icons/detailPage/storeIcon1.svg";
import storeIcon2 from "../assets/icons/detailPage/storeIcon2.svg";
import storeIcon3 from "../assets/icons/detailPage/storeIcon3.svg";
import storeIcon4 from "../assets/icons/detailPage/storeIcon4.svg";
import storeIcon5 from "../assets/icons/detailPage/storeIcon5.svg";
import StoreIcon6 from "../assets/icons/detailPage/StoreIcon6.svg";
import StoreIcon7 from "../assets/icons/detailPage/StoreIcon7.svg";
import mapMarker from "../assets/icons/myMap/mapMarker.svg";
import sampleImg from "../assets/images/homeMember/sample.jpeg";
import { useKakaoPlaceDetails } from "../hooks/useKakao";

const storeIcon = [storeIcon1, storeIcon2, storeIcon3, storeIcon4, storeIcon5];

export const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useKakaoLoader();

  // 서버에서 받아온 데이터를 저장할 상태
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { kakaoData } = useKakaoPlaceDetails(data?.location, data?.storeName);
  useEffect(() => {
    const fetchStoreDetails = async () => {
      if (!id) {
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        const storeDetails = await getstoreDetail(Number(id));
        setData(storeDetails);
        console.log("Fetched Store Details:", storeDetails); // 데이터 확인용 로그
      } catch (err) {
        console.error("Error fetching store details:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStoreDetails();
  }, [id]);

  console.log(kakaoData);
  // 로딩 중이거나, 에러가 발생했거나, 데이터가 없을 경우
  if (isLoading) {
    return (
      <PageLayout>
        <div>로딩 중...</div>
      </PageLayout>
    );
  }

  if (error || !data) {
    return (
      <PageLayout>
        <div>게시글을 찾을 수 없습니다.</div>
      </PageLayout>
    );
  }

  console.log(kakaoData);
  let center = { lat: 37.5665, lng: 126.978 }; // 기본값응 서울 시청
  if (data.location) {
    const [lat, lng] = data.location.split(",");

    if (!isNaN(parseFloat(lat)) && !isNaN(parseFloat(lng))) {
      center = { lat: parseFloat(lat), lng: parseFloat(lng) };
    }
  }

  // tags와 storeTags 태그 목록
  const allTags = [
    ...(data.tags?.map((t) => t.tagName) || []),
    ...(data.storeTags?.map((t) => t.storeTagName) || []),
  ].filter(Boolean);

  return (
    <PageLayout>
      <p
        className="flex flex-row text-[#E86C00]  text-[15px] font-semibold items-center mt-[52px] mb-[51px] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={BackOrangeIcon} className="w-[18px] h-[18px]" alt="back" />
        뒤로가기
      </p>
      <div className="w-full h-auto shadow-[0_0_7.6px_-1px_rgba(0,0,0,0.20)] rounded-[24px] pt-[34px] pl-[71px] pr-[65px] pb-[33px] mb-[54px] relative">
        <img className="absolute right-8 top-6 " src={saveIcon} alt="save" />
        <h4 className="text-[32px] font-semibold text-[#E86C00] mb-8">
          {data.storeName}
        </h4>

        {allTags.length > 0 && (
          <div className="flex gap-3 text-[#E86C00] text-[13px] mb-[23px] flex-wrap">
            {allTags.map((tagName, index) => (
              <p
                className=" bg-[#FFEDD5] rounded-[50px] py-[5px] px-[7px]"
                key={index}
              >
                # {tagName}
              </p>
            ))}
          </div>
        )}

        {data.photos && data.photos.length > 0 ? (
          <div className="w-full flex flex-row gap-5 mb-[29px] overflow-x-auto pb-2">
            {data.photos.map((photo, index) => (
              <img
                key={index}
                src={photo.photoUrl}
                alt={`${data.storeName} ${index + 1}`}
                className="w-[334px] h-[284px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-row gap-5 mb-[29px] overflow-x-auto pb-2">
            <img
              src={sampleImg}
              alt={data.storeName}
              className="w-[334px] h-[284px] object-cover"
            />
            <img
              src={sampleImg}
              alt={data.storeName}
              className="w-[334px] h-[284px] object-cover"
            />
            <img
              src={sampleImg}
              alt={data.storeName}
              className="w-[334px] h-[284px] object-cover"
            />
            <img
              src={sampleImg}
              alt={data.storeName}
              className="w-[334px] h-[284px] object-cover"
            />
          </div>
        )}

        {/* ai/chat 연결 */}
        <div className="bg-[#F5F5F5] w-full h-auto pt-[13px] px-[27px] pb-[27px] rounded-[24px]  relative">
          <div className="flex flex-row items-center mt-[14px] text-[20px] font-semibold text-[#757575] ">
            AI가 알려주는 다시 올 이유 !
          </div>
          <p className="text-[#757575] text-[15px] ">
            AI가 알려주는 다시 올 이유 --- 연결할거임 ai chat
          </p>
        </div>
      </div>

      <div className=" mb-[50px] flex flex-row w-full h-auto justify-between">
        <div className="w-[440px] h-[359px] shadow-[0_0_7.6px_-1px_rgba(0,0,0,0.20)] rounded-[24px] pt-[51px] pl-[56px] pr-[48px] pb-8">
          <h3 className="text-[#757575] text-[24px] font-semibold pl-[10px] mb-[23px]">
            {data.storeName}
          </h3>
          <div className="flex flex-col gap-[7px] mb-[34px]">
            {[
              { value: kakaoData?.category_group_name }, // category
              { value: data.address },
              {
                value:
                  kakaoData?.open_time != undefined
                    ? `${kakaoData.open_time} ~ ${kakaoData.close_time}`
                    : "운영시간 정보가 미등록되어있습니다",
              }, // opentime & closetime
              { value: kakaoData?.phone }, // phonenumber
              { value: kakaoData?.place_url }, // link
            ].map(
              (item, idx) =>
                item.value && (
                  <div
                    className="flex gap-2 text-[#757575] text-[15px]"
                    key={idx}
                  >
                    <img
                      src={storeIcon[idx]}
                      alt="icon"
                      className="w-[20px] h-[20px]"
                    />
                    <p>{item.value}</p>
                  </div>
                )
            )}
          </div>
          <div className="flex text-[20px] font-medium gap-[22px] h-[48px] mt-[30px]">
            <div className="flex text-[#969696] gap-3  items-center bg-[#ECECEC] rounded-[12px] flex-1 justify-center cursor-pointer">
              <img
                src={StoreIcon6}
                alt="길찾기"
                className="w-[25px] h-[25px]"
              />
              <p>길찾기</p>
            </div>
            <div
              className="flex text-[#E86C00] gap-3  items-center bg-[#FFEDD5] rounded-[12px] flex-1 justify-center cursor-pointer"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "내 웹사이트",
                    text: "내가 발견한 특별한 장소를 다시 찾아갈 수 있도록",
                    url: kakaoData?.place_url,
                  });
                } else {
                  alert("이 브라우저는 기본 공유 기능을 지원하지 않습니다.");
                }
              }}
            >
              <img src={StoreIcon7} alt="공유" className="w-[30px] h-[30px]" />
              <p>공유하기</p>
            </div>
          </div>
        </div>
        <Map
          className="w-[748px] h-[601px] rounded-2xl"
          id="map"
          center={center}
          level={3}
        >
          <MapMarker
            position={center}
            image={{
              src: mapMarker,
              size: { width: 70, height: 70 },
            }}
          />
        </Map>
      </div>

      <div className="shadow-[0_0_7.6px_-1px_rgba(0,0,0,0.20)] rounded-[24px] w-full h-auto mb-[56px] pt-[75px] pb-[62px] px-[68px] flex flex-col">
        <div className="flex">
          <div className="w-[211px]">
            {data.avgRating ? (
              <h1 className="text-[#FF7700] text-[65px] font-medium">
                ★ {data.avgRating}
              </h1>
            ) : (
              <h1 className="text-[#FF7700] text-[65px] font-medium">★ 0</h1>
            )}
            <p className="text-[30px] text-[#757575] font-medium">
              다녀왔어요
              <br /> 리뷰
            </p>
          </div>
          <textarea
            className="p-[20px] mt-[40px] min-h-[133px] border-[1px] border-[#C4C4C4] rounded-[24px] flex-1 focus:outline-none focus:border-[#FF7700]"
            placeholder="리뷰를 입력해 주세요..."
          ></textarea>
        </div>

        {data.reviews && data.reviews.length > 0 && (
          <div className="mt-[38px] flex flex-col gap-4 text-[#757575] ">
            {data.reviews.map((r) => (
              <div
                className="bg-[#F5F5F5] pt-4 px-5 rounded-[24px] pb-5 "
                key={r.reviewId}
              >
                <div className="flex gap-2 mb-1 items-center">
                  <h4 className="font-semibold">{r.userEmail} Review</h4>
                  {r.rating && (
                    <p className="text-[#FF7700] bg-[#fff] rounded-[50px] text-[10px] px-1">
                      ★ {r.rating}
                    </p>
                  )}
                </div>
                <p>{r.riview}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};
