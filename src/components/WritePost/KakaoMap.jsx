import { useEffect } from "react";

export const KakaoMap = ({ address })=> {
  useEffect(() => {
  if (!window.kakao || !address) return;
  const { kakao } = window;

  const container = document.getElementById("map");
  if (!container) {
    console.error("map container not found!");
    return;
  }

  const map = new kakao.maps.Map(container, {
    center: new kakao.maps.LatLng(37.5665, 126.9780),
    level: 3,
  });

  const geocoder = new kakao.maps.services.Geocoder();
  geocoder.addressSearch(address, (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      const marker = new kakao.maps.Marker({
        map,
        position: coords,
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:12px;">${result[0].address_name}</div>`,
      });
      infowindow.open(map, marker);

      map.setCenter(coords);
    }
  });
}, [address]);

  return (
    <div>
      <div id="map" className="w-full h-64 border-3 rounded"></div>
    </div>
  );
};
