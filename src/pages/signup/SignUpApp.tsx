import SignupHeader from "../../components/signup/SignupHeader";
import StdCertify from "../../components/signup/StdCertify";
import SchoolInfo from "../../components/signup/SchoolInfo";
import StdInfo from "../../components/signup/StdInfo";
import AgreeTerm from "../../components/signup/AgreeTerm";
import SignUpBtn from "../../components/signup/SignUpBtn";
import { useState } from "react";
import styled from "styled-components";

const SignUpContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 30px 20px;
`;

const SignUpContent = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
`;

const NextSignUpContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const SignUpApp = () => {
  const [step, setStep] = useState(1);

  const moveToNextStep = () => {
    setStep(step + 1);
  };

  const moveToBeforeStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <SignupHeader />
      <SignUpContainer>
        {step === 1 && (
          <>
            <Title>회원가입</Title>
            <SignUpContent>
              <StdCertify />
              <SchoolInfo moveToNextStep={moveToNextStep} />
            </SignUpContent>
          </>
        )}
        {step === 2 && (
          <NextSignUpContent>
            <Title>회원가입</Title>
            <StdInfo />
            <AgreeTerm />
            <SignUpBtn moveToBeforeStep={moveToBeforeStep} />
          </NextSignUpContent>
        )}
      </SignUpContainer>
    </div>
  );
};

export default SignUpApp;
