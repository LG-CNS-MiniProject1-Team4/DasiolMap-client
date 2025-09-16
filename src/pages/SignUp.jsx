// // 비율 조정 & 로그인 버튼 추가

import React, { useState } from "react";
import styled from "styled-components";
// import api from "../../../api/axios";
import { useNavigate } from "react-router-dom";

// export const SignUp = () => {
//   return <div className="text-[#FF7700]">SignUp</div>;
// };

// Container - 전체 페이지 부분
const Container = styled.div`
  display: flex;
  width: full;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
`;

const LeftSection = styled.div`
  width: 50%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
`;

const Title = styled.h2`
  font-size: 60px;
  color: #3c3c3c;
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-size: 18px;
  color: #666666;
  margin-top: 20px;

  a {
    color: #ff7700;
    text-decoration: none;
    margin-left: 10px;
  }
`;

const RightSection = styled.div`
  width: 50%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  height: 60px;
  padding: 12px;
  margin-bottom: 13px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
`;

const Button = styled.button`
  height: 60px;
  background-color: #ff7700;
  color: white;
  border: none;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: #e06600;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// 뒤로가기 탭 " 다시올지도"
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
  margin-right: 10px;
  color: #ff7700;
`;

const HeaderText = styled.span`
  font-size: 15px;
  font-weight: semibold;
  color: #ff7700;
`;

// 입력창 위 라벨 부분
const InputLabel = styled.label`
  font-size: 16px;
  font-weight: semibold;
  color: #757575;
  margin-bottom: 10px;
`;

// SignUp Component
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const moveUrl = useNavigate();

  const handleSubmit = async (e, email, passwd, nickname, name, birth) => {
    e.preventDefault();
    console.log(">>>>>>>>>>> ", email, passwd, nickname, name, birth);

    console.log("회원가입 정보:");
    // 여기서 API 호출 가능 axios post : data(emai, passwd, name, birth)
    // 1. 유효성 체크
    // 2. 정상적인 데이터 입력시 화면전환 /login 이동
    const data = { email, passwd, nickname, name, birth };
    // await api
    //   .post("/api/v2/inspire/user/signup", data)
    //   .then((response) => {
    //     console.log("[debug] >>> post response : ", response);
    //     moveUrl("/login");
    //   })
    //   .catch((error) => {
    //     console.log("[debug] >>> post error");
    //   });
  };

  return (
    <>
      <Header onClick={() => moveUrl(-1)}>
        <BackArrow>&lt;</BackArrow>
        <HeaderText>다시올지도</HeaderText>
      </Header>

      <Container>
        <LeftSection>
          <Title>
            <b>회원가입</b>
          </Title>
          <SubText>
            이미 계정이 있으신가요?
            <a href="/login">로그인</a>
          </SubText>
        </LeftSection>

        <RightSection>
          <InputLabel htmlFor="email">이메일</InputLabel>
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputLabel htmlFor="passwd">비밀번호</InputLabel>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
            required
          />
          <InputLabel htmlFor="text">닉네임</InputLabel>
          <Input
            type="text"
            placeholder="닉네임을 입력하세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <InputLabel htmlFor="name">이름</InputLabel>
          <Input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <InputLabel htmlFor="birth">생년월일</InputLabel>
          <Input
            type="text"
            placeholder="생년월일 (YYYY.MM.DD)"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            required
          />
          <Button
            onClick={(e) =>
              handleSubmit(e, email, passwd, nickname, name, birth)
            }
          >
            회원가입
          </Button>
        </RightSection>
      </Container>
    </>
  );
};

export default SignUp;
