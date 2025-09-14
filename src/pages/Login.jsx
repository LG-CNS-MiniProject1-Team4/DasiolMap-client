import React, { useState } from "react";
import styled from "styled-components";
// import api from "../../../api/axios";
import { useNavigate } from "react-router-dom";

// Container
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

// Input
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
  // api.defaults.headers.common["Authorization"] = "";

  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const moveUrl = useNavigate();

  const handleSubmit = async (e, email, passwd) => {
    console.log("로그인 정보:");
    // API 호출 가능
    // const data = { email, passwd };

    // await api
    //   .get("/api/v2/inspire/user/signin", { params: data })
    //   .then((response) => {
    //     console.log("[debug] >>> post respone : ", response);
    //     console.log("accessToken", response.headers.get("authorization"));
    //     console.log("refreshToken", response.headers.get("refresh-token"));

    //     localStorage.setItem(
    //       "accessToken",
    //       response.headers.get("authorization")
    //     );
    //     localStorage.setItem(
    //       "refreshToken",
    //       response.headers.get("refresh-token")
    //     );

    //     localStorage.setItem("userInfo", response.data.name);
    //     localStorage.setItem("userEmail", response.data.email);

    //     moveUrl("/blog");
    //   })
    //   .catch((error) => {
    //     console.log("[debug] >>> post error");
    //   });
  };

  return (
    <Container>
      <LeftSection>
        <Title>로그인</Title>
        <SubText>
          아직 계정이 없으신가요??
          <a href="/login">회원가입</a>
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

        <Button onClick={(e) => handleSubmit(e, email, passwd)}>로그인</Button>
      </RightSection>
    </Container>
  );
};

export default Login;
