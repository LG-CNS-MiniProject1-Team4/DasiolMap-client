import pizzaImg from "../../../assets/images/pizza.png";
import { useEffect, useRef } from "react";

// 임의 데이터(나중에 DB에서 가져오기)
const places = [
  {
    id: 1,
    title: "송파 피자 맛집",
    image: pizzaImg,
    location: "송파구 방이동",
    rating: "4.8",
    tags: ["데이트", "핫플", "데이트"],
  },
  {
    id: 2,
    title: "강남 피자 맛집",
    image: pizzaImg,
    location: "강남역",
    rating: "4.5",
    tags: ["데이트", "핫플", "가성비"],
  },
  {
    id: 3,
    title: "홍대 분위기깡패 카페",
    image: pizzaImg,
    location: "홍대입구",
    rating: "4.7",
    tags: ["카공", "분위기", "조용한"],
  },
  {
    id: 4,
    title: "송파 카공 카페",
    image: pizzaImg,
    location: "송파구 잠실",
    rating: "4.9",
    tags: ["데이트", "인스타", "케이크"],
  },
  {
    id: 5,
    title: "방이역 맛집",
    image: pizzaImg,
    location: "방이동 먹자골목",
    rating: "4.6",
    tags: ["데이트", "인스타", "맛집"],
  },
  {
    id: 6,
    title: "역삼 핫플",
    image: pizzaImg,
    location: "역삼역",
    rating: "4.5",
    tags: ["데이트", "분위기", "케이크"],
  },
  {
    id: 7,
    title: "남양주 전시 핫플",
    image: pizzaImg,
    location: "남양주",
    rating: "5.0",
    tags: ["핫플", "인스타", "데이트"],
  },
];

export const PlaceTab = () => {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => { //상위 카드 애니메이션 : 좌->우
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.5;

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


  useEffect(() => { // 하위 카드 애니메이션 : 우->좌
    const container = scrollRef2.current;
    if (!container) return;

    const speed = 0.5;

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
    <section className="py-12 text-center relative max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">다양한 카테고리의 인기 장소들</h2>

      <div className="relative">
        {/* 카드 리스트 */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden px-12"
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
          className="flex gap-6 overflow-hidden px-12 mt-20"
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
    </section>
  );
};
