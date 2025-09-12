// 비율 조정 & 로그인 버튼 추가

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
  width: 1440px;
  height: 933px;
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
  margin-bottom: 20px;
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

// SignUp Component
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const moveUrl = useNavigate();

  const handleSubmit = async (e, email, passwd, nickname, name, birth) => {
    console.log(">>>>>>>>>>> ", email, passwd, nickname, name, birth);

    console.log("회원가입 정보:");
    // 여기서 API 호출 가능 axios post : data(emai, passwd, name, birth)
    // 1. 유효성 체크
    // 2. 정상적인 데이터 입력시 화면전환 /login 이동
    const data = { email, passwd, nickname, name, birth };
    await api
      .post("/api/v2/inspire/user/signup", data)
      .then((response) => {
        console.log("[debug] >>> post response : ", response);
        moveUrl("/login");
      })
      .catch((error) => {
        console.log("[debug] >>> post error");
      });
  };

  return (
    <Container>
      <LeftSection>
        <Title>회원가입</Title>
        <SubText>
          이미 계정이 있으신가요?
          <a href="/login">로그인</a>
        </SubText>
      </LeftSection>

      <RightSection>
        <Input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={passwd}
          onChange={(e) => setPasswd(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="닉네임을 입력하세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="생년월일 (YYYY.MM.DD)"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          required
        />
        <Button
          onClick={(e) => handleSubmit(e, email, passwd, nickname, name, birth)}
        >
          회원가입
        </Button>
      </RightSection>
    </Container>
  );
};

export default SignUp;
