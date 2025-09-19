// 모달 추가

import { useState } from "react";
// import { axiosInstance } from "../../apis/axiosInstance"; // axiosInstance 임포트
import { axiosInstance } from "../apis/axiosInstance";
// import axios from "axios";
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
  width: full;
  height: calc(100vh - 153px);
  background-color: #ffffff;
`;

const Sidebar = styled.div`
  width: 500px;
  padding: 40px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
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

const Username = styled.h3`
  font-size: 40px;
  font-weight: 500;
`;

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
  margin-top: 30px;
  display: flex;
  cursor: pointer;
  margin-bottom: 50px;
`;

const BackArrow = styled.span`
  font-size: 17px;
  margin-top: 10px;
  margin-right: 10px;
  color: #757575;
`;

const HeaderText = styled.span`
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
  color: #757575;
`;

const EditProfileButton = styled.button`
  width: 286px;
  height: 50px;
  background-color: #ff7700;
  color: white;
  border: none;
  font-size: 17px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #e06600;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// 모달 스타일
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newNickname, setNewNickname] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const nickname = localStorage.getItem("nickname");
  const email = localStorage.getItem("email");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const updateData = {
      email: email,
      nickname: newNickname,
      passwd: newPassword,
    };

    //  accessToken을 localStorage에서 가져옵니다.
    // const token = localStorage.getItem("accessToken");

    //  API의 전체 URL을 직접 작성합니다.

    // const API_URL = "http://localhost:8088/auth/api/v2/dasiolmap/user/update";
    // try {
    //   //  이 부분을 수정하세요!
    //   const response = await axiosInstance.post(
    //     "/user/update", // baseURL 뒤에 올 경로만 작성합니다.
    //     updateData
    //   );
    const API_URL = `/user/update`;
    try {
      const response = await axiosInstance.put(
        `user/updateUser/${email}`, // Swagger 경로에 맞게 수정: /updateUser/{id}
        updateData
      );

      // const response = await axiosInstance.put(
      //   `/user/update/${email}`,
      //   updateData
      // );
      // const response = await axiosInstance.put(
      //   `/user/update/${email}`,
      //   updateData
      // );

      console.log("수정 성공:", response.data);
      alert("회원 정보가 성공적으로 수정되었습니다.");
      setIsModalOpen(false);

      localStorage.setItem("nickname", newNickname);
      window.location.reload();
    } catch (error) {
      console.error("프로필 수정 실패:", error);
      alert("회원 정보 수정에 실패했습니다.");
    }
  };

  // ... (기존 JSX return 부분)

  return (
    <PageLayout>
      <Container>
        <Sidebar>
          <Header onClick={() => moveUrl(-1)}>
            <BackArrow>&lt;</BackArrow>
            <HeaderText>뒤로가기</HeaderText>
          </Header>
          <ProfileImage className="flex mx-auto w-[280px] h-[280px]">
            <ProfileImgTag src={humanLogo} alt="프로필 이미지" />
          </ProfileImage>

          <Username className="mx-auto">{nickname}</Username>
          <Email className="mx-auto">{email}</Email>
          <EditProfileButton
            onClick={() => setIsModalOpen(true)}
            className="mx-auto"
          >
            프로필 수정하기
          </EditProfileButton>
          {/* 클릭 시 모달 열기 */}
          <StatBox className="mx-auto mt-7">
            <img src={save} alt="저장 아이콘" width="30" height="30" />
            <img src={heart} alt="좋아요 아이콘" width="30" height="30" />
          </StatBox>
        </Sidebar>

        <ContentArea>
          <SectionTitle className="mt-[50px] text-[#757575]">
            저장한 장소
          </SectionTitle>
          <CardGrid className="mb-[100px] ">
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

          <SectionTitle
            style={{ marginTop: "40px" }}
            className="mb-[100px] text-[#757575]"
          >
            내 게시글
          </SectionTitle>
          <CardGrid className="mb-[100px]">
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

      {/*  추가됨: 모달  */}
      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2
              style={{
                fontSize: "20px",
                marginBottom: "20px",
                margin: "auto",
              }}
              className="font-bold text-[#333]"
            >
              회원정보 수정
            </h2>

            {/*  추가: form 태그와 onSubmit 핸들러 */}
            <form
              onSubmit={handleUpdateProfile}
              className="flex flex-col gap-2 mx-[20px] "
            >
              <Input
                type="email"
                // placeholder를 고정 값으로 변경하거나, value만 사용
                placeholder={email}
                value={email}
                disabled // 이메일은 수정할 수 없게 막음
                className="bg-[#c4c4c4] text-[#757575]"
              />
              <Input
                type="text"
                placeholder="새 닉네임을 입력하세요"
                value={newNickname} //  추가: 상태와 연결
                onChange={(e) => setNewNickname(e.target.value)} //  추가: 변경 핸들러
              />
              <Input
                type="password" //  중요: 비밀번호는 type="password"로 변경
                placeholder="새 비밀번호를 입력하세요"
                value={newPassword} //  추가: 상태와 연결
                onChange={(e) => setNewPassword(e.target.value)} //  추가: 변경 핸들러
              />

              {/*  수정: button type을 submit으로 변경 */}
              <ModalButton type="submit">수정완료</ModalButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageLayout>
  );
};

export default MyPage;
