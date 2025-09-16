import { useState, useEffect } from "react";
import { KakaoMap } from "./KakaoMap";

export default function LocationSearch({onSelectLocation}) {
  const [input, setInput] = useState("");       // 입력값
  const [results, setResults] = useState([]);   // 검색 결과 리스트
  const [selected, setSelected] = useState(null); // 선택된 장소

  // 검색 실행
  const handleSearch = () => {
    if (!window.kakao || !input.trim()) return;
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(input, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK && data.length > 0) {
        setResults(data); // 검색 결과들을 저장
        setSelected(null); // 이전 선택 초기화
      } else {
        alert("검색 결과가 없습니다.");
        setResults([]);
        setSelected(null);
      }
    });
  };

  // 리스트 항목 클릭 시
  const handleSelect = (place) => {
    const locationData = {
      placeName: place.place_name,
      address: place.road_address_name || place.address_name,
      coords: { x: place.x, y: place.y },
    };

    setSelected(locationData);
    onSelectLocation(locationData); // 부모 컴포넌트로 전달
  };

  // 선택된 장소가 변경될 때 지도 표시
  useEffect(() => {
    if (selected && window.kakao) {
      const { kakao } = window;
      const container = document.getElementById("map");
      if (!container) return;

      // 지도 생성
      const map = new kakao.maps.Map(container, {
        center: new kakao.maps.LatLng(selected.coords.y, selected.coords.x),
        level: 3,
      });

      // 마커 추가
      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(selected.coords.y, selected.coords.x),
      });

      // 인포윈도우 상호명 표시
      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:12px;">${selected.placeName}</div>`,
      });
      infowindow.open(map, marker);
    }
  }, [selected]);

  return (
    <div className="space-y-3">
      <p className="font-bold">상호명 검색</p>
      {/* 검색창 */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="다녀온 장소의 상호명을 입력하세요 (예: 스타벅스)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border-2 border-amber-600 focus:outline-none focus:border-gray-900 p-2 rounded"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-orange-500 text-white px-4 rounded"
        >
          검색
        </button>
      </div>

      {/* 검색 결과 리스트 */}
      {results.length > 0 && (
        <ul className="rounded divide-y max-h-60 overflow-y-auto border-3 border-amber-600">
          {results.map((place) => (
            <li
              key={place.id}
              onClick={() => handleSelect(place)}
              className="p-2 hover:bg-orange-100 cursor-pointer border-0"
            >
              <p className="font-semibold">{place.place_name}</p>
              <p className="text-sm text-gray-600">
                {place.road_address_name || place.address_name}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* 선택된 장소 정보 */}
      {selected && (
        <>
          <div className="text-sm mt-2">
            <p>
              <span className="font-semibold">선택된 상호:</span>{" "}
              {selected.placeName}
            </p>
            <p>
              <span className="font-semibold">주소:</span> {selected.address}
            </p>
          </div>
          {/* 지도 */}
          <div id="map" className="w-full h-64 border-0 rounded mt-2"></div>
        </>
      )}
    </div>
  );
}
