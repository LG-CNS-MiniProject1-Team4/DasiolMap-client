import React, { useState } from "react";
import styled from "styled-components";
import api from "../../../api/axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  return <div className="text-[#FF7700]">SignUp</div>;
};

// Container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

// Form Box
const FormWrapper = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

// Title
const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #3c3c3c;
  font-size: 60px;
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
  width: 100%;
  padding: 12px;
  background-color: #ff7700;
  color: white;
  border: none;
  font-size: 24px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #ff7700;
  }

  &:disabled {
    background-color: #ffffff;
    cursor: not-allowed;
  }
`;

// SignUp Component
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const moveUrl = useNavigate();

  const handleSubmit = async (e, email, passwd, nickname, name, birthdate) => {
    e.preventDefault();
    console.log(">>>>>>>>>>> ", email, passwd, nickname, name, birthdate);

    console.log("회원가입 정보:");
    // 여기서 API 호출 가능 axios post : data(emai, passwd, name)
    // 1. 유효성 체크
    // 2. 정상적인 데이터 입력시 화면전환 /login 이동
    const data = { email, passwd, nickname, name, birthdate };
    await api
      .post("/api/v2/inspire/user/signup", data)
      .then((response) => {
        // console.log("[debug] >>> post response : " , response );
        moveUrl("/login");
      })
      .catch((error) => {
        console.log("[debug] >>> post error");
      });
  };

  return (
    <Container>
      <FormWrapper>
        <Title>회원가입</Title>

        <Input
          type="email"
          name="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <Input
          type="password"
          name="passwd"
          placeholder="비밀번호를 입력하세요"
          value={passwd}
          onChange={(e) => {
            setPasswd(e.target.value);
          }}
          required
        />
        <Input
          type="text"
          name="nickname"
          placeholder="닉네임을 입력하세요"
          value={nickname}
          onChange={(e) => {
            setConfirmPasswd(e.target.value);
          }}
          required
        />
        <Input
          type="text"
          name="name"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <Input
          type="text"
          name="birthdate"
          placeholder="년도 월 일"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <Button
          type="button"
          onClick={(e) =>
            handleSubmit(e, email, passwd, nickname, name, birthdate)
          }
        >
          가입하기
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
