import { useState, useRef } from "react";
import LocationSearch from "./LocationSearch";
import { axiosInstance } from "../../apis/axiosInstance";

export const AddDetail = () => {
  //const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]); // 업로드한 이미지 삭제
  const fileInputRef = useRef(null);
  const [locationInfo, setLocationInfo] = useState(null);

  // const [storeId, setStoreId] = useState(null);
  // 태그 선택 상태
  const [selectedTags, setSelectedTags] = useState({
    목적: [],
    음식종류: [],
    분위기: [],
    시설: [],
  });

  // 체크박스 상태
  const [options, setOptions] = useState({
    맛집: false,
    핫플: false,
    기억에남는장소: false,
  });

  // 평점 상태
  const [avgRating, setAvgRating] = useState(0);

  // 태그 토글 핸들러
  const handleTagClick = (category, tag) => {
    setSelectedTags((prev) => {
      const current = prev[category];
      if (current.includes(tag)) {
        return { ...prev, [category]: current.filter((t) => t !== tag) }; // 제거
      } else {
        return { ...prev, [category]: [...current, tag] }; // 추가
      }
    });
  };

  // 체크박스 토글
  const handleCheckboxChange = (name) => {
    setOptions((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // 사진 선택 처리 (최대 4장 제한)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (images.length >= 4) {
      alert("최대 4장까지만 업로드 가능합니다.");
      return;
    }

    const availableSlots = 4 - images.length; // 남은 자리
    const selectedFiles = files.slice(0, availableSlots);

    selectedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [...prev, reader.result]); // base64 URL 저장
      };
      reader.readAsDataURL(file);
    });
  };

  // 사진 추가 클릭 → input 실행
  const handleAddImageClick = () => {
    if (images.length >= 4) {
      alert("사진은 최대 4장까지만 추가할 수 있습니다.");
      return;
    }
    fileInputRef.current?.click();
  };

  // 사진 삭제
  const handleDeleteImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // 폼 제출
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!locationInfo) {
      alert("위치를 먼저 선택해주세요!");
      return;
    }

    const storeData = {
      storeName: locationInfo.placeName ?? "", // placeName → storeName
      address: locationInfo.address ?? "", // address 그대로 사용
      location: locationInfo.coords
        ? `${locationInfo.coords.y},${locationInfo.coords.x}` // 위도,경도 문자열
        : "",
    };

    // let reviewData = {
    //   // photos: images, // base64 배열 그대로 보낼지, 업로드 후 URL만 보낼지는 백엔드랑 합의 필요
    //   // tags: selectedTags, // 목적/음식종류/분위기/시설 → 객체 그대로 전달
    //   // storeTags: options, // { 맛집: true, 핫플: false... } 형태
    //   reviews: content, // 후기 내용
    //   avgRating: avgRating, // 숫자
    //   userEmail: localStorage.getItem("email"),
    //   storeId,
    // };

    try {
      // 1️⃣ 매장 정보 저장
      const storeRegisterResponse = await axiosInstance.post(
        "/store/register",
        storeData
      );

      // const newStore = storeRegisterResponse.data; // 서버가 생성된 store 객체를 반환한다고 가정
      // const newStoreId = newStore.storeId; // 새로 생성된 storeId 추출
      // setStoreId(newStoreId);

      // if (!newStoreId) {
      //   alert("매장 정보 등록 후 storeId를 받아오지 못했습니다.");
      //   return;
      // }
      // console.log("매장 등록 성공, storeId:", newStoreId);
      console.log("매장 등록 성공, storeId:", storeRegisterResponse);

      // // 2️⃣ 리뷰 저장
      // await axiosInstance.post("/store/review/register", reviewData);
      // console.log("storeData 전송 데이터:", storeData);
      // console.log("review 전송 데이터:", reviewData);

      // await selectedTags.forEach((t) => {
      //   axiosInstance.post("/store/storetag/register", t);
      //   console.log(">>", t);
      // });
      // alert("후기 등록 완료!");
    } catch (err) {
      console.log("storeData 전송 데이터:", storeData);
      // console.log("review 전송 데이터:", reviewData);
      console.error("전송 실패:", err);
      alert("전송 중 문제가 발생했습니다.");
    }
  };

  // 카테고리별 태그 목록
  const categories = {
    목적: ["데이트", "회식", "기념일", "가족모임", "애견동반", "비즈니스모임"],
    음식종류: ["한식", "양식", "중식", "일식", "아시아음식", "기타"],
    분위기: ["뷰맛집", "조용한", "모던한", "트렌디한", "이국적인", "전통적인"],
    시설: ["주차", "단체석", "콜키지", "룸", "1인석"],
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-lg font-semibold mb-4">
        나만의 <span className="text-orange-500">다시 오고 싶은 장소</span>를
        공유해주세요
      </h1>

      {/* 사진 섹션 */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {images.length < 4 && (
          <div
            onClick={handleAddImageClick}
            className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center text-sm text-gray-500 cursor-pointer hover:bg-gray-300"
          >
            + 사진추가
          </div>
        )}
        {images.map((src, index) => (
          <div key={index} className="w-24 h-24 relative group">
            <img
              src={src}
              alt={`preview-${index}`}
              className="w-full h-full object-cover rounded"
            />
            <button
              type="button"
              onClick={() => handleDeleteImage(index)}
              className="absolute top-1 right-1 bg-black bg-opacity-60 text-white text-xs rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImageChange}
      />

      <LocationSearch onSelectLocation={setLocationInfo} />

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 태그 */}
        <p className="mt-3 font-bold">태그</p>
        <div className="border-2 border-amber-600 rounded p-4 space-y-4">
          {Object.entries(categories).map(([category, tags]) => (
            <div key={category}>
              <p className="font-semibold mb-2 text-gray-600">{category}</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {tags.map((tag) => {
                  const isActive = selectedTags[category].includes(tag);
                  return (
                    <span
                      key={tag}
                      onClick={() => handleTagClick(category, tag)}
                      className={`px-3 py-1 border rounded-full cursor-pointer ${
                        isActive
                          ? "bg-orange-100 text-orange-600 border-orange-100"
                          : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-orange-200 hover:border-orange-200"
                      }`}
                    >
                      #{tag}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 체크박스 */}
        <div className="flex gap-4 mt-3">
          {Object.keys(options).map((opt) => (
            <label key={opt} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={options[opt]}
                onChange={() => handleCheckboxChange(opt)}
              />
              {opt}
            </label>
          ))}
        </div>

        {/* 게시글 제목
        <p className="mt-3 font-bold">게시글 제목</p>
        <input
          type="text"
          placeholder="게시글 제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-2 border-amber-600 focus:outline-none focus:border-gray-900 p-3 rounded"
        /> */}

        {/* 리뷰내용 작성 */}
        <p className="mt-3 font-bold">후기내용 작성</p>
        <textarea
          placeholder="장소를 다녀온 후기 내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border-2 border-amber-600 focus:outline-none focus:border-gray-900 p-3 rounded h-32"
        />

        {/* ⭐ 평점 (별 아이콘) */}
        <p className="mt-3 font-bold">평점 선택</p>
        <div className="flex items-center justify-between border-2 border-amber-600 rounded p-3">
          <div className="flex gap-1 text-2xl cursor-pointer">
            {[1, 2, 3, 4, 5].map((rating) => (
              <span
                key={rating}
                onClick={() => setAvgRating(rating)}
                className={`transition ${
                  rating <= avgRating ? "text-yellow-400" : "text-gray-300"
                } hover:text-yellow-500`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            선택한 평점: {avgRating}점
          </p>
        </div>

        {/* 등록 버튼 */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 mt-3"
        >
          후기 등록
        </button>
      </form>
    </div>
  );
};
