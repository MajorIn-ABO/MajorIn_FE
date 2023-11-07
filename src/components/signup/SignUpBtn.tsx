import "../../styles/signup/SignUpBtn.scss";
import styled from "styled-components";

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SignUpBtn: React.FC<{ moveToBeforeStep: () => void }> = ({
  moveToBeforeStep,
}) => {
  return (
    <BtnContainer>
      <button className="before-button" onClick={moveToBeforeStep}>
        이전으로
      </button>
      <button className="signup-button">회원가입</button>
    </BtnContainer>
  );
};

export default SignUpBtn;
