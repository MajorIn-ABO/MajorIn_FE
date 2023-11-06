import LoginForm from "../../components/login/LoginForm";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const LoginApp = () => {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
};

export default LoginApp;
