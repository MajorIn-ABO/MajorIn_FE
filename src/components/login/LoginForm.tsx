import { ReactComponent as LogoIcon } from "../../assets/icon/logo2.svg";
import "../../styles/login/LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <LogoIcon />
        <h1>메이저인</h1>
        <h3>MajorIn</h3>
      </div>
      <form className="login-form">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="패스워드" />
        <div>
          <input type="radio" id="login-keep" />
          <label htmlFor="login-keep">로그인 상태 유지</label>
        </div>
        <input type="button" value="로그인" />
      </form>
      <div className="login-bottom">
        <p>아이디 찾기</p>
        <p>패스워드 찾기</p>
        <p>회원가입</p>
      </div>
    </div>
  );
};

export default LoginForm;
