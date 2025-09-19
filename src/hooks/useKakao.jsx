import { useState, useEffect } from "react";
import axios from "axios";

/**
 * @param {string | null} location - "위도,경도" 형태의 문자열
 * @param {string | null} storeName - 검색할 가게 이름
 */
export const useKakaoPlaceDetails = (location, storeName) => {
  const [kakaoData, setKakaoData] = useState(null);

  useEffect(() => {
    if (!location || !storeName) {
      return;
    }

    const fetchKakaoDetails = async () => {
      try {
        const [lat, lng] = location.split(",");
        const response = await axios.get(
          "https://dapi.kakao.com/v2/local/search/keyword.json",
          {
            headers: {
              Authorization: `KakaoAK ${
                import.meta.env.VITE_KAKAO_REST_API_KEY
              }`,
            },
            params: {
              query: storeName,
              y: lat,
              x: lng,
              radius: 500,
              size: 1,
            },
          }
        );

        if (response.data.documents && response.data.documents.length > 0) {
          setKakaoData(response.data.documents[0]);
          console.log("Kakao API Details:", response.data.documents);
        } else {
          setKakaoData(null);
        }
      } catch (error) {
        console.error(error);
        setKakaoData(null);
      }
    };

    fetchKakaoDetails();
  }, [location, storeName]);

  return { kakaoData };
};
