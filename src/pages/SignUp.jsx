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

// loginform
const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(#c4c4c4);
  width: 777px;
  height: 70px;
`;

return (
  <Container>
    <BackLink href="/">
      <BackIcon>&lt;</BackIcon>
      다시올지도
    </BackLink>
    <FormContainer>
      <LeftSection>
        <LoginTitle>로그인</LoginTitle>
        <LinkWrapper>
          <AccountLink>아직 계정이 없으신가요?</AccountLink>
          <SignUpLink href="/signup">회원가입</SignUpLink>
        </LinkWrapper>
      </LeftSection>
      <RightSection>
        <WelcomeMessage>다시올지도에 오신 것을 환영합니다</WelcomeMessage>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>이메일</Label>
            <Input
              type="email"
              name="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label>비밀번호</Label>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
          <SubmitButton type="submit">로그인</SubmitButton>
        </Form>
      </RightSection>
    </FormContainer>
  </Container>
);
