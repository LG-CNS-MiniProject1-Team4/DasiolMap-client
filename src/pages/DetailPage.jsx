import PageLayout from "../components/layout/PageLayout";
import BackOrangeIcon from "../assets/icons/detailPage/backOrange.svg";
import defaultPrfImg from "../assets/images/datailPage/prfImg.png";
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
import samplePrf from "../assets/images/datailPage/samplePrf.jpg";

import { useNavigate, useParams } from "react-router-dom";
import { useMemo, Fragment } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
const storeIcon = [storeIcon1, storeIcon2, storeIcon3, storeIcon4, storeIcon5];
const sampleMapData = [
  {
    id: 1,
    center: { lat: 33.450701, lng: 126.571644 },
    title: "송파 피자 맛집 공유합니다~",
    content:
      "스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대표하는 곳 중의 하나다. 김정호 셰프가 헤드셰프를 맡고 있다. 식재료와 조리 기법, 플레이팅 모두 세계적인 수준의 요리를 즐길 수 있다. 스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대",
    storeName: "라쿤피자-1",
    tags: ["데이트", "데이트", "데이트"],
    thumbImg: sampleImg,
    imgList: [sampleImg, sampleImg, sampleImg],
    rate: 4.8,
    location: "서울특별시 강남구 선릉로158길 11 (청담동)",
    opentime: "09:00",
    closetime: "17:00",
    phonenumber: "02-222-2222",
    prfImg: samplePrf,
    prfName: "4조파이팅",
    category: "음식점",
    link: "http://place.map.kakao.com/16618597",
  },
  {
    id: 2,
    center: { lat: 33.450701, lng: 126.574663 },
    title: "송파 피자 맛집 공유합니다~",
    content:
      "스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대표하는 곳 중의 하나다. 김정호 셰프가 헤드셰프를 맡고 있다. 식재료와 조리 기법, 플레이팅 모두 세계적인 수준의 요리를 즐길 수 있다. 스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대표하는 곳 중의 하나다. 김정호 셰프가 헤드셰프를 맡고 있다. 식재료와 조리 기법, 플레이팅 모두 세계적인 수준의 요리를 즐길 수 있다. 스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대",
    storeName: "라쿤피자-2",
    tags: ["데이트", "데이트", "데이트"],
    thumbImg: sampleImg,
    imgList: [sampleImg, sampleImg, sampleImg],
    rate: 4.8,
    location: "서울특별시 강남구 선릉로158길 11 (청담동)",
    opentime: "09:00",
    closetime: "17:00",
    phonenumber: "02-333-3333",
    // prfImg: samplePrf,
    prfName: "4조파이팅",
    category: "음식점",
    link: "http://place.map.kakao.com/16618597",
  },
];

const sampleReviews = [
  {
    id: 1,
    name: "4조파이팅",
    rate: 4.8,
    content:
      "스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대표하는 곳 중의 하나다. 김정호 셰프가 헤드셰프를 맡고 있다. 식재료와 조리 기법, 플레이팅 모두 세계적인 수준의 요리를 즐길 수 있다.스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대표하는 곳 중의 하나다. 김정호 셰프가 헤드셰프를 맡고 있다. 식재료와 조리 기법, 플레이팅 모두 세계적인 수준의 요리를 즐길 수 있다.스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대",
  },
  {
    id: 2,
    name: "4조파이팅",
    rate: 4.8,
    content:
      "스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대표하는 곳 중의 하나다. 김정호 셰프가 헤드셰프를 맡고 있다. 식재료와 조리 기법, 플레이팅 모두 세계적인 수준의 요리를 즐길 수 있다.스페인을 비롯한 세계 미식 트렌드의 영향을 많이 받아 새로운 장르를 개척한 임정식 셰프의 레스토랑으로, 뉴코리안이라는 콘셉트로 서울을 대",
  },
];

export const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useKakaoLoader();

  const data = useMemo(() => {
    const numId = Number(id);
    if (Number.isNaN(numId)) {
      return <div> 해당 정보가 없습니다</div>;
    }
    return sampleMapData.find((d) => d.id === numId) ?? null;
  }, [id]);

  return (
    <PageLayout>
      <p
        className="flex flex-row text-[#E86C00]  text-[15px] font-semibold items-center mt-[52px] mb-[51px] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={BackOrangeIcon} className="w-[18px] h-[18px]" />
        뒤로가기
      </p>
      <div className="w-full h-auto shadow-[0_0_7.6px_-1px_rgba(0,0,0,0.20)] rounded-[24px] pt-[34px] pl-[71px] pr-[65px] pb-[33px] mb-[54px] relative">
        <img className="absolute right-8 top-6 " src={saveIcon} alt="save" />
        <h4 className="text-[32px] font-semibold text-[#E86C00] mb-8">
          {data.storeName}
        </h4>
        <div className="flex gap-3 text-[#E86C00] text-[13px] mb-[23px]">
          {data.tags.map((t) => (
            <p className=" bg-[#FFEDD5] rounded-[50px] py-[5px] px-[7px]">
              # {t}
            </p>
          ))}
        </div>
        <div className="w-full gap-5 flex flex-row mb-[29px]">
          {data.imgList.map((t) => (
            <img
              src={t}
              alt={data.storeName}
              className="w-[3347px] h-[284px]"
            />
          ))}
        </div>
        <div className="bg-[#F5F5F5] w-full h-auto pt-[13px] px-[27px] pb-[17px] rounded-[24px]  relative">
          <div className="absolute top-3 right-4 text-[#FF7700] text-[15px] bg-[#fff] rounded-[50px] shadow-[0_0_2px_rgba(0,0,0,0.25)] px-[6px] py-[1px]">
            ★ {data.rate}
          </div>
          <h4 className="text-[22px] font-semibold text-[#505050] mb-2">
            {data.title}
          </h4>
          <p className="text-[#757575] text-[15px] ">{data.content}</p>
          <div className="flex flex-row  items-center  mt-[14px] text-[20px] font-semibold text-[#757575] gap-[10px]">
            <div className="w-[40px] h-[40px] rounded-full align-center items-center flex">
              {data.prfImg ? (
                <img
                  src={data.prfImg}
                  className="rounded-full w-[31px] h-[31px]"
                />
              ) : (
                <img src={defaultPrfImg} className="w-[40px] h-[40px]" />
              )}
            </div>
            {data.prfName}
          </div>
        </div>
      </div>

      <div className=" mb-[50px] flex flex-row w-full h-auto justify-between">
        {/* 가게 정보 */}
        <div className="w-[440px] h-[359px] shadow-[0_0_7.6px_-1px_rgba(0,0,0,0.20)] rounded-[24px]  pt-[51px] pl-[56px]">
          <h3 className="text-[#757575] text-[24px] font-semibold pl-[10px] mb-[23px]">
            {data.storeName}
          </h3>
          <div className="flex flex-col gap-[7px] mb-[34px]">
            {[
              data.category,
              data.location,
              data.opentime + " ~ " + data.closetime,
              data.phonenumber,
              data.link,
            ].map((t, idx) => (
              <div className="flex gap-2 text-[#757575] text-[15px]">
                <img
                  src={storeIcon[idx]}
                  alt="t"
                  className="w-[20px] h-[20px]"
                />
                <p>{t}</p>
              </div>
            ))}
            <div className="flex mr-[48px] text-[20px] font-medium gap-[22px] h-[48px] mt-[30px]">
              <div className="flex text-[#969696] gap-3  items-center bg-[#ECECEC] rounded-[12px] flex-1 justify-center cursor-pointer">
                <img
                  src={StoreIcon6}
                  alt="길찾기"
                  className="w-[25px] h-[25px]"
                />
                <p>길찾기</p>
              </div>
              <div className="flex text-[#E86C00] gap-3  items-center bg-[#FFEDD5] rounded-[12px] flex-1 justify-center cursor-pointer">
                <img
                  src={StoreIcon7}
                  alt="공유"
                  className="w-[30px] h-[30px]"
                />
                <p>공유하기</p>
              </div>
            </div>
          </div>
        </div>
        {/* 지도 */}
        <Map
          className="w-[748px] h-[601px]"
          id="map"
          center={data.center}
          level={3}
        >
          <Fragment key={data.id}>
            <MapMarker
              className="relative z-10"
              position={data.center}
              key={data.id}
              image={{
                src: mapMarker,
                size: {
                  width: 70,
                  height: 70,
                },
              }}
            />
          </Fragment>
        </Map>
      </div>
      {/* 리뷰 */}
      <div className="shadow-[0_0_7.6px_-1px_rgba(0,0,0,0.20)] rounded-[24px] w-full h-auto mb-[56px] pt-[75px] pb-[62px] px-[68px] flex flex-col">
        <div className="flex">
          <div className="w-[211px]">
            <h1 className="text-[#FF7700] text-[65px] font-medium">
              ★ {data.rate}
            </h1>
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
        <div className="mt-[38px] flex flex-col gap-4 text-[#757575] ">
          {sampleReviews.map((r) => (
            <div className="bg-[#F5F5F5] pt-4 px-5 rounded-[24px] pb-5 ">
              <div className="flex gap-2  mb-1 align-center items-center">
                <h4 className="font-semibold">{r.name} Review</h4>
                <p className="text-[#FF7700] bg-[#fff] rounded-[50px]  text-[10px]  px-1">
                  ★ {r.rate}
                </p>
              </div>
              <p>{r.content}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
