import pizzaImg from "../../../assets/images/pizza.png";
import porkImg from "../../../assets/images/pork.png";
import hongdaeImg from "../../../assets/images/hongdae.png";
import songpaImg from "../../../assets/images/songpa.png";
import bangeiImg from "../../../assets/images/bangei.png";
import coexImg from "../../../assets/images/coex.png";
import displayImg from "../../../assets/images/display.png";
import riverbusImg from "../../../assets/images/riverbus.png";
import moonImg from "../../../assets/images/moon.png";
import runnerImg from "../../../assets/images/runner.png";
import gardenImg from "../../../assets/images/garden.png";
import xrImg from "../../../assets/images/xr.png";
import christmasImg from "../../../assets/images/christmas.png";
import bookImg from "../../../assets/images/book.png";
import { useEffect, useRef } from "react";

// 더미 데이터
const places = [
  {
    id: 1,
    title: "송파 피자 맛집",
    image: pizzaImg,
    location: "송파구 방이동",
    rating: "4.8",
    tags: ["데이트", "핫플", "분위기"],
  },
  {
    id: 2,
    title: "강남 삼겹 맛집",
    image: porkImg,
    location: "강남역",
    rating: "4.5",
    tags: ["데이트", "핫플", "가성비"],
  },
  {
    id: 3,
    title: "홍대 분위기깡패 카페",
    image: hongdaeImg,
    location: "홍대입구",
    rating: "4.7",
    tags: ["카공", "분위기", "조용한"],
  },
  {
    id: 4,
    title: "송파 카공 카페",
    image: songpaImg,
    location: "송파구 잠실",
    rating: "4.9",
    tags: ["데이트", "인스타", "케이크"],
  },
  {
    id: 5,
    title: "방이역 맛집",
    image: bangeiImg,
    location: "방이동 먹자골목",
    rating: "4.6",
    tags: ["데이트", "인스타", "맛집"],
  },
  {
    id: 6,
    title: "역삼 핫플",
    image: coexImg,
    location: "역삼역",
    rating: "4.5",
    tags: ["데이트", "분위기", "케이크"],
  },
  {
    id: 7,
    title: "남양주 전시 핫플",
    image: displayImg,
    location: "남양주",
    rating: "5.0",
    tags: ["핫플", "인스타", "데이트"],
  },
];

// 더미 데이터2
const places2 = [
  {
    id: 1,
    title: "한강 리버 버스",
    image: riverbusImg,
    location: "7개 한강",
    rating: "5.0",
    tags: ["데이트", "핫플", "인스타"],
  },
  {
    id: 2,
    title: "남산 XR 스튜디오",
    image: xrImg,
    location: "남산",
    rating: "4.7",
    tags: ["인스타", "핫플", "데이트"],
  },
  {
    id: 3,
    title: "여의도 러너스테이션",
    image: runnerImg,
    location: "여의도",
    rating: "4.5",
    tags: ["운동", "핫플", "건강"],
  },
  {
    id: 4,
    title: "서울의 달 열기구",
    image: moonImg,
    location: "여의도 한강공원",
    rating: "4.9",
    tags: ["데이트", "인스타", "분위기"],
  },
  {
    id: 5,
    title: "국제 정원 박람회",
    image: gardenImg,
    location: "보라매",
    rating: "4.8",
    tags: ["데이트", "산책", "분위기"],
  },
  {
    id: 6,
    title: "야외 도서관",
    image: bookImg,
    location: "광화문",
    rating: "4.6",
    tags: ["독서", "데이트", "야외"],
  },
  {
    id: 7,
    title: "클스마스 명동 신세계",
    image: christmasImg,
    location: "명돈 신세계",
    rating: "5.0",
    tags: ["핫플", "인스타", "데이트"],
  },
];

export const PlaceTab = () => {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    //상위 카드 애니메이션 : 좌->우
    const container = scrollRef.current;
    if (!container) return;

    const speed = 1;

    const interval = setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll) {
        // 끝에 도착하면 처음으로 되돌리기
        container.scrollLeft = 0;
        return;
      }
      // 오른쪽으로 계속 이동
      container.scrollLeft += speed;
    }, 20); // 시간 간격 조절 (ms)

    return () => clearInterval(interval); // 언마운트 시 정리
  }, []);

  useEffect(() => {
    // 하위 카드 애니메이션 : 우->좌
    const container = scrollRef2.current;
    if (!container) return;

    const speed = 1;

    const maxScroll = container.scrollWidth - container.clientWidth;
    container.scrollLeft = maxScroll; //최초 랜더링시에만 우측 끝에서 시작

    const interval = setInterval(() => {
      if (container.scrollLeft <= 0) {
        // 끝에 도착하면 처음으로 되돌리기
        container.scrollLeft = maxScroll;
        return;
      }
      // 좌측으로 계속 이동
      container.scrollLeft -= speed;
    }, 20); // 시간 간격 조절 (ms)

    return () => clearInterval(interval); // 언마운트 시 정리
  }, []);

  return (
    <div className=" justify-center flex ">
      <section className="py-12 text-center relative max-w-6xl flex flex-col ">
        <h2 className="text-[36px] font-bold">다양한 카테고리의 인기 장소들</h2>
        <p className="text-[#969696] font-light text-[16px]  mb-10">
          사용자들이 직접 발견하고 공유한 특별한 장소들을 둘러보세요
        </p>
        <div className="relative">
          {/* 카드 리스트 */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden px-12 pb-1"
          >
            {places.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition min-w-[250px] max-w-[250px] flex-shrink-0"
              >
                {/* 이미지 & 평점 */}
                <div className="relative">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="rounded-t-lg w-full h-[160px] object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-white text-sm font-semibold px-2 py-0.5 rounded-full shadow">
                    {place.rating}
                  </span>
                </div>
                {/* 텍스트 + 태그 */}
                <div className="p-3 text-left">
                  <p className="font-bold mb-1">{place.title}</p>
                  <p className="text-gray-500 text-sm flex items-center mb-2">
                    <span className="mr-1">📍</span>
                    {place.location}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {place.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 두 번째 카드 리스트*/}
        <div className="relative">
          {/* 카드 리스트 */}
          <div
            ref={scrollRef2}
            className="flex gap-6 overflow-hidden px-12 mt-15 pb-1"
          >
            {places2.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition min-w-[250px] max-w-[250px] flex-shrink-0"
              >
                {/* 이미지 & 평점 */}
                <div className="relative">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="rounded-t-lg w-full h-[160px] object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-white text-sm font-semibold px-2 py-0.5 rounded-full shadow">
                    {place.rating}
                  </span>
                </div>
                {/* 텍스트 + 태그 */}
                <div className="p-3 text-left">
                  <p className="font-bold mb-1">{place.title}</p>
                  <p className="text-gray-500 text-sm flex items-center mb-2">
                    <span className="mr-1">📍</span>
                    {place.location}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {place.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
