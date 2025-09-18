import React, { useState } from "react";
import styled from "styled-components";
// import api from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

import { useLogin } from "../hooks/useLogin";

// Container
const Container = styled.div`
  display: flex;
  width: full;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
`;

// 환영문구
const WelcomeText = styled.div`
  font-size: 25px;
  margin-bottom: 82px;
  text-align: center;
`;

const OrangeText = styled.span`
  color: #ff7700;
  font-weight: medium;
`;

const GrayText = styled.span`
  color: #757575;
`;

const LeftSection = styled.div`
  width: 50%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
`;

// Title
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

// Input - 입력창 관련 부분
const Input = styled.input`
  height: 60px;
  padding: 12px;
  margin-bottom: 25px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
`;

// Button
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

// Link
const TextLink = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
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
//

// 입력창 위 라벨 부분
const InputLabel = styled.label`
  font-size: 16px;
  font-weight: semibold;
  color: #757575;
  margin-bottom: 10px;
`;

const Login = () => {
  const { handleLogin } = useLogin();

  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const moveUrl = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(email, passwd);
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
            <b>로그인</b>
          </Title>
          <SubText>
            아직 계정이 없으신가요??
            <a href="/signup">회원가입</a>
          </SubText>
        </LeftSection>

        <RightSection>
          <WelcomeText>
            <OrangeText>다시올지도</OrangeText>
            <GrayText>에 오신 것을 환영합니다</GrayText>
          </WelcomeText>

          <form onSubmit={handleSubmit} className="flex flex-col">
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
            <Button type="submit">로그인</Button>
          </form>
        </RightSection>
      </Container>
    </>
  );
};

export default Login;
