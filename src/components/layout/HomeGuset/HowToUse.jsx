export const HowToUse = () => {
  const steps = [
    {
      number: "1",
      title: "기록하기",
      description: "내가 발견한 특별한 장소를 포스팅하고 기록해요",
    },
    {
      number: "2",
      title: "탐색하기",
      description: "다른 사용자들이 남긴 장소들을 지도로 탐색해요",
    },
    {
      number: "3",
      title: "나의 지도 만들기",
      description: "마음에 드는 곳을 북마크하고 나만의 지도를 완성해요",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 text-center">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          다시올지도, 이렇게 사용해 보세요!
        </h2>
        <p className="text-gray-500">
          간단한 세 단계만 거치면, 당신의 특별한 경험이 지도가 됩니다
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center max-w-[180px]">
            {/* 번호 원 */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-200 text-orange-600 font-bold text-xl mb-4">
              {step.number}
            </div>
            {/* 제목 */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            {/* 설명 */}
            <p className="text-sm text-gray-600">{step.description}</p>

            {/* 화살표 (가운데 정렬 / 마지막에는 없음) */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute mt-[40px] ml-[210px] text-orange-400 text-2xl">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};