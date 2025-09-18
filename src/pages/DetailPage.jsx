// src/pages/DetailPage.jsx
import PageLayout from "../components/layout/PageLayout";
import BackOrangeIcon from "../assets/icons/detailPage/backOrange.svg";
// ... (기존 임포트)
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useKakaoLoader } from "react-kakao-maps-sdk";
import { getstoreDetail, useStore } from "../apis/store";

export const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useKakaoLoader();

  // useStore 훅을 사용하여 전역 상태 가져오기
  const { posts, fetchPosts, isLoading, error } = useStore();
  const { data } = getstoreDetail(Number(id));

  //컴포넌트 마운트 시 게시글 목록을 불러옴
  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, [posts.length, fetchPosts]);

  const postId = Number(id);
  // 전역 상태에서 ID에 해당하는 게시글 찾기
  //const data = posts.find((p) => p.id === postId);

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        if (id) {
          const data = await getstoreDetail(Number(id));
          setStoreData(data);
        }
      } catch (err) {
        console.error("Error fetching store details:", err);
      }
    };

    fetchStoreDetails();
  }, [id]); // id가 변경될 때마다 재호출

  if (!data) {
    return (
      <PageLayout>
        <div>게시글을 찾을 수 없습니다.</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div></div>
      ... (기존 JSX 코드)
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
            <p
              className=" bg-[#FFEDD5] rounded-[50px] py-[5px] px-[7px]"
              key={t}
            >
              # {t}
            </p>
          ))}
        </div>
        <div className="w-full gap-5 flex flex-row mb-[29px]">
          {data.imgList.map((t, index) => (
            <img
              key={index}
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
                  alt="프로필 이미지"
                />
              ) : (
                <img
                  src={defaultPrfImg}
                  className="w-[40px] h-[40px]"
                  alt="기본 프로필 이미지"
                />
              )}
            </div>
            {data.prfName}
          </div>
        </div>
      </div>
      <div className=" mb-[50px] flex flex-row w-full h-auto justify-between">
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
              <div className="flex gap-2 text-[#757575] text-[15px]" key={idx}>
                <img
                  src={storeIcon[idx]}
                  alt="icon"
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
          {/* sampleReviews 대신 서버에서 가져온 리뷰 데이터 사용 */}
          {/* 현재 `data.reviews`가 없으므로 이 부분은 필요에 따라 추가해야 합니다. */}
          x{" "}
          {data.reviews.map((r) => (
            <div
              className="bg-[#F5F5F5] pt-4 px-5 rounded-[24px] pb-5 "
              key={r.id}
            >
              <div className="flex gap-2  mb-1 align-center items-center">
                <h4 className="font-semibold">{r.name} Review</h4>
                <p className="text-[#FF7700] bg-[#fff] rounded-[50px]  text-[10px]  px-1">
                  ★ {r.rate}
                </p>
              </div>
              <p>{r.content}</p>
            </div>
          ))}
          {/* 임시로 sampleReviews 그대로 사용 */}*{" "}
          {sampleReviews.map((r) => (
            <div
              className="bg-[#F5F5F5] pt-4 px-5 rounded-[24px] pb-5 "
              key={r.id}
            >
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
