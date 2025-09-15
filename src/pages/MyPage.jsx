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

// import React from "react";
// import styled from "styled-components";
// import PageLayout from "../components/layout/PageLayout";
// import { useNavigate } from "react-router-dom";

// // 이미지 import
// import humanLogo from "../assets/images/homeMember/humanLogo.png";
// import save from "../assets/icons/homeMember/save.svg";
// import heart from "../assets/icons/homeMember/heart.png";
// import sample from "../assets/images/homeMember/sample.jpeg";

// const [isModalOpen, setIsModalOpen] = useState(false);

// const Container = styled.div`
//   display: flex;
//   width: 1440px;
//   height: 1963px;
//   margin: 0 auto;
//   background-color: #ffffff;
// `;

// const Sidebar = styled.div`
//   width: 411px;
//   padding: 40px;
//   background-color: #ffffff;
//   border-right: 1px solid #ddd;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const ProfileImage = styled.div`
//   width: 282px;
//   height: 282px;
//   border-radius: 50%;
//   margin-bottom: 20px;
//   border: 2px solid #ececec;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const ProfileImgTag = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const Username = styled.h3`
//   font-size: 40px;
//   font-weight: midium;
//   margin-bottom: 6px;
// `;

// const Email = styled.p`
//   font-size: 24px;
//   font-weight: light;
//   color: #969696;
//   margin-bottom: 20px;
// `;

// const StatBox = styled.div`
//   display: flex;
//   gap: 20px;
//   font-size: 14px;
//   color: #555;
//   align-items: center;
// `;

// const ContentArea = styled.div`
//   flex: 1;
//   padding: 40px;
//   overflow-y: auto;
// `;

// const SectionTitle = styled.h4`
//   font-size: 24px;
//   font-weight: 600;
//   margin-bottom: 42px;
// `;

// // const CardGrid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
// //   gap: 20px;
// // `;

// const CardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 293px);
//   column-gap: 50px;
//   row-gap: 50px;
//   justify-content: center;
// `;

// // const PlaceCard = styled.div`
// //   border: 1px solid #ddd;
// //   border-radius: 10px;
// //   overflow: hidden;
// //   background-color: #ffffff;
// // `;

// const PlaceCard = styled.div`
//   width: 293px;
//   height: 260px;
//   border: 1px solid #ddd;
//   border-radius: 10px;
//   overflow: hidden;
//   background-color: #ffffff;
// `;

// const CardImage = styled.div`
//   height: 172px;
//   background-image: ${(props) => `url(${props.src})`};
//   background-size: cover;
//   background-position: center;
// `;

// const CardContent = styled.div`
//   padding: 20px;
// `;

// const PlaceName = styled.p`
//   font-weight: 600;
//   margin-bottom: 10px;
// `;

// const PlaceLocation = styled.p`
//   font-size: 13px;
//   color: #757575;
// `;

// const Header = styled.div`
//   position: absolute;
//   top: 161px;
//   left: 117px;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   z-index: 10;
// `;

// const BackArrow = styled.span`
//   font-size: 15px;
//   margin-top: 10px;
//   margin-right: 10px;
//   color: #757575;
// `;

// const HeaderText = styled.span`
//   font-size: 15px;
//   margin-top: 10px;
//   font-weight: 600;
//   color: #757575;
// `;

// // 회원정보 수정 버튼
// const EditProfileButton = styled.button`
//   width: 286px;
//   height: 44px;
//   background-color: #ff7700;
//   color: white;
//   border: none;
//   font-size: 16px;
//   font-weight: 500;
//   border-radius: 6px;
//   cursor: pointer;
//   margin: 20px 0;

//   &:hover {
//     background-color: #e06600;
//   }

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

// export const MyPage = () => {
//   const moveUrl = useNavigate();

//   return (
//     <PageLayout>
//       <Header onClick={() => moveUrl(-1)}>
//         <BackArrow>&lt;</BackArrow>
//         <HeaderText>뒤로가기</HeaderText>
//       </Header>

//       <Container>
//         <Sidebar>
//           <ProfileImage>
//             <ProfileImgTag src={humanLogo} alt="프로필 이미지" />
//           </ProfileImage>
//           <Username>4조파이팅</Username>
//           <Email>like2024@naver.com</Email>

//           <EditProfileButton>프로필 수정하기</EditProfileButton>

//           <StatBox>
//             <img src={save} alt="저장 아이콘" width="20" height="20" />
//             <img src={heart} alt="좋아요 아이콘" width="20" height="20" />
//           </StatBox>
//         </Sidebar>

//         <ContentArea>
//           <SectionTitle>저장한 장소</SectionTitle>
//           <CardGrid>
//             {[...Array(4)].map((_, i) => (
//               <PlaceCard key={i}>
//                 <CardImage src={sample} />
//                 <CardContent>
//                   <PlaceName>홍익피자</PlaceName>
//                   <PlaceLocation>서울 마포구 와우산로21길 19</PlaceLocation>
//                 </CardContent>
//               </PlaceCard>
//             ))}
//           </CardGrid>

//           <SectionTitle style={{ marginTop: "40px" }}>내 게시글</SectionTitle>
//           <CardGrid>
//             {[...Array(4)].map((_, i) => (
//               <PlaceCard key={i}>
//                 <CardImage src={sample} />
//                 <CardContent>
//                   <PlaceName>홍익피자</PlaceName>
//                   <PlaceLocation>서울 마포구 와우산로21길 19</PlaceLocation>
//                 </CardContent>
//               </PlaceCard>
//             ))}
//           </CardGrid>
//         </ContentArea>
//       </Container>
//     </PageLayout>
//   );
// };

// export default MyPage;

///////////////////////////////////////////////////////////////////////////
// 모달 추가

import React, { useState } from "react"; // 🔧 수정됨: useState 추가
import styled from "styled-components";
import PageLayout from "../components/layout/PageLayout";
import { useNavigate } from "react-router-dom";

// 이미지 import
import humanLogo from "../assets/images/homeMember/humanLogo.png";
import save from "../assets/icons/homeMember/save.svg";
import heart from "../assets/icons/homeMember/heart.png";
import sample from "../assets/images/homeMember/sample.jpeg";

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
// 수정됨: 'midium' → '500'
const Username = styled.h3`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 6px;
`;

// 수정됨: 'light' → '300'
const Email = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: #969696;
  margin-bottom: 20px;
`;

const StatBox = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #555;
  align-items: center;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
`;

const SectionTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 42px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 293px);
  column-gap: 50px;
  row-gap: 50px;
  justify-content: center;
`;

const PlaceCard = styled.div`
  width: 293px;
  height: 260px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
`;

const CardImage = styled.div`
  height: 172px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const PlaceName = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;

const PlaceLocation = styled.p`
  font-size: 13px;
  color: #757575;
`;

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
  font-weight: 600;
  color: #757575;
`;

const EditProfileButton = styled.button`
  width: 286px;
  height: 44px;
  background-color: #ff7700;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  margin: 20px 0;

  &:hover {
    background-color: #e06600;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// 🔧 추가됨: 모달 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const ModalButton = styled.button`
  height: 44px;
  background-color: #ff7700;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #e06600;
  }
`;

export const MyPage = () => {
  const moveUrl = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // 🔧 추가됨: 모달 상태

  return (
    <PageLayout>
      <Header onClick={() => moveUrl(-1)}>
        <BackArrow>&lt;</BackArrow>
        <HeaderText>뒤로가기</HeaderText>
      </Header>

      <Container>
        <Sidebar>
          <ProfileImage>
            <ProfileImgTag src={humanLogo} alt="프로필 이미지" />
          </ProfileImage>
          <Username>4조파이팅</Username>
          <Email>like2024@naver.com</Email>
          <EditProfileButton onClick={() => setIsModalOpen(true)}>
            프로필 수정하기
          </EditProfileButton>{" "}
          {/* 🔧 수정됨: 클릭 시 모달 열기 */}
          <StatBox>
            <img src={save} alt="저장 아이콘" width="20" height="20" />
            <img src={heart} alt="좋아요 아이콘" width="20" height="20" />
          </StatBox>
        </Sidebar>

        <ContentArea>
          <SectionTitle>저장한 장소</SectionTitle>
          <CardGrid>
            {[...Array(4)].map((_, i) => (
              <PlaceCard key={i}>
                <CardImage src={sample} />
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
                <CardImage src={sample} />
                <CardContent>
                  <PlaceName>홍익피자</PlaceName>
                  <PlaceLocation>서울 마포구 와우산로21길 19</PlaceLocation>
                </CardContent>
              </PlaceCard>
            ))}
          </CardGrid>
        </ContentArea>
      </Container>

      {/*  추가됨: 모달 JSX */}
      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
              회원정보 수정
            </h2>
            <Input type="email" placeholder="이메일을 입력하세요" />
            <Input type="text" placeholder="닉네임을 입력하세요" />
            <Input type="text" placeholder="이름을 입력하세요" />
            <Input type="date" placeholder="생년월일" />
            <ModalButton onClick={() => setIsModalOpen(false)}>
              수정완료
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageLayout>
  );
};

export default MyPage;
