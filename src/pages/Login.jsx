import React, { useState } from "react";
import styled from "styled-components";
// import api from "../../../api/axios";
import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   return <div className="text-[#FF7700]">Login</div>;
// };

// Container - 전체 페이지 부분
const Container = styled.div`
  display: flex;
  width: 1440px;
  height: 933px;
  margin: 0 auto;
  background-color: #ffffff;
`;

// Form Box
const FormWrapper = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 350px;
`;

// Title
const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  color: #333;
`;

// Input
const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
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

const Login = () => {
  api.defaults.headers.common["Authorization"] = "";

  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const moveUrl = useNavigate();

  const handleSubmit = async (e, email, passwd) => {
    e.preventDefault();
    console.log("로그인 정보:");
    // API 호출 가능
    const data = { email, passwd };

    await api
      .get("/api/v2/inspire/user/signin", { params: data })
      .then((response) => {
        console.log("[debug] >>> post respone : ", response);
        console.log("accessToken", response.headers.get["authorization"]);
        console.log("refreshToken", response.headers.get["refresh-token"]);

        localStorage.setItem(
          "accessToken",
          response.headers.get("authorization")
        );
        localStorage.setItem(
          "refreshToken",
          response.headers.get("refresh-token")
        );

        localStorage.setItem("userInfo", response.data.name);
        localStorage.setItem("userEmail", response.data.email);

        moveUrl("/");
      })
      .catch((error) => {
        console.log("[debug] >>> post error");
      });
  };

  return (
    <Container>
      <FormWrapper>
        <Title>로그인</Title>

        <Input
          type="email"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={passwd}
          onChange={(e) => {
            setPasswd(e.target.value);
          }}
          required
        />
        <Button type="button" onClick={(e) => handleSubmit(e, email, passwd)}>
          로그인
        </Button>

        <TextLink>비밀번호를 잊으셨나요?</TextLink>
        <TextLink>회원가입</TextLink>
      </FormWrapper>
    </Container>
  );
};

export default Login;
