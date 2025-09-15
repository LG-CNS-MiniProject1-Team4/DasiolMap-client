// import PageLayout from "../components/layout/PageLayout";
// import { MapArea } from "../components/myMap/MapArea";

// export const MyMap = () => {
//   return (
//     <div>
//       <PageLayout>
//         <div className="flex flex-row  w-full  h-[calc(100vh-153px)]">
//           <div className="w-[411px] ">
//             왼쪽왼쪽왼쪽왼쪽왼쪽왼쪽왼쪽왼쪽왼쪽왼쪽왼쪽왼쪽왼쪽왼쪽왼쪽
//           </div>
//           <div className="flex-1 overflow-scroll [scrollbar-width:none]">
//             <div className="w-full h-500 bg-[red]">오른오른오른쪽</div>
//           </div>
//         </div>
//       </PageLayout>
//     </div>
//   );
// };
// export default MyPage;

/////////////////////////////////////////////////////////////////////////////

import React from "react";
import styled from "styled-components";
import PageLayout from "../components/layout/PageLayout";
import { MapArea } from "../components/myMap/MapArea";
// import humanLogo from "../../../assets/images/homeMember/humanLogo.png";
import save from "../../../assets/icons/homeMember/save.svg";
import { useNavigate } from "react-router-dom";
const moveUrl = useNavigate();

const Container = styled.div`
  display: flex;
  width: 1440px;
  height: 1963px;
  margin: 0 auto;
  background-color: #ffffff;
`;

const Sidebar = styled.div`
  width: 411px;
  padding: 40px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid #ececec;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImgTag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// const ProfileImage = styled.div`
//   width: 282px;
//   height: 282px;
//   background-image: url("/assets/images/homeMember/humanLogo.png");
//   background-size: cover;
//   background-position: center;
//   border-radius: 50%;
//   margin-bottom: 20px;
//   border: 2px solid #ececec;
// `;

const Username = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
`;

const Email = styled.p`
  font-size: 14px;
  color: #757575;
  margin-bottom: 20px;
`;

const StatBox = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #555;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
`;

const SectionTitle = styled.h4`
  font-size: 24px;
  font-weight: semi bold;
  margin-bottom: 42px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;

const PlaceCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
`;

const CardImage = styled.div`
  height: 120px;
  background-image: url("https://via.placeholder.com/180x120");
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 10px;
`;

const PlaceName = styled.p`
  font-weight: 600;
  margin-bottom: 4px;
`;

const PlaceLocation = styled.p`
  font-size: 13px;
  color: #757575;
`;
// 뒤로가기 탭
const Header = styled.div`
  position: absolute;
  top: 161px;
  left: 117px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`;

const BackArrow = styled.span`
  font-size: 15px;
  margin-top: 10px;
  margin-right: 10px;
  color: #757575;
`;

const HeaderText = styled.span`
  font-size: 15px;
  margin-top: 10px;
  font-weight: semibold;
  color: #757575;
`;
///

export const MyPage = () => {
  return (
    <PageLayout>
      {/* <ProfileImage>
        <ProfileImgTag src={humanLogo} alt="프로필 이미지" />
      </ProfileImage> */}

      <Header onClick={() => moveUrl(-1)}>
        <BackArrow>&lt;</BackArrow>
        <HeaderText>뒤로가기</HeaderText>
      </Header>

      <Container>
        <Sidebar>
          <ProfileImage />
          <Username>4조파이팅</Username>
          <Email>like2024@naver.com</Email>
          <StatBox>
            <ProfileImgTag src={save} alt="프로필 이미지" />
            <span>💬 22</span>
          </StatBox>
        </Sidebar>

        <ContentArea>
          <SectionTitle>저장한 장소</SectionTitle>
          <CardGrid>
            {[...Array(4)].map((_, i) => (
              <PlaceCard key={i}>
                <CardImage />
                <CardContent>
                  <PlaceName>홍익피자</PlaceName>
                  <PlaceLocation>서울 마포구 와우산로21길 19</PlaceLocation>
                </CardContent>
              </PlaceCard>
            ))}
          </CardGrid>

          <SectionTitle style={{ marginTop: "40px" }}>내 게시글</SectionTitle>
          <CardGrid>
            {[...Array(4)].map((_, i) => (
              <PlaceCard key={i}>
                <CardImage />
                <CardContent>
                  <PlaceName>홍익피자</PlaceName>
                  <PlaceLocation>서울 마포구 와우산로21길 19</PlaceLocation>
                </CardContent>
              </PlaceCard>
            ))}
          </CardGrid>
        </ContentArea>
      </Container>
    </PageLayout>
  );
};

export default MyPage;
