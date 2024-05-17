import { ReactComponent as LogoIcon } from "../../assets/icon/logo2.svg";
import "../../styles/login/LoginForm.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postData } from "../../api/postData";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    const loginData = {
      username,
      password,
    };

    const response = await postData("/login/", loginData);
    // console.log("로그인 폼 전달: ", response);

    if (response) {
      const data = await response.token;
      login(
        data.access,
        data.refresh,
        data.user_name,
        data.school_name,
        data.major_name,
        data.admission_date,
        data.user_id
      );
      alert("로그인에 성공하였습니다.");
      navigate("/");
    }
  };

  const goSignUp = () => {
    navigate("/signup");
  };
  const goHome = () => {
    navigate("/home");
  };
  return (
    <div className="login-container">
      <div className="logo" onClick={goHome}>
        <LogoIcon />
        <h1>메이저인</h1>
        <h3>MajorIn</h3>
      </div>
      <form className="login-form">
        <input
          type="text"
          placeholder="아이디"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="패스워드"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <div>
          <input type="radio" id="login-keep" />
          <label htmlFor="login-keep">로그인 상태 유지</label>
        </div>
        <input type="button" value="로그인" onClick={handleLogin} />
      </form>
      <div className="login-bottom">
        <p>아이디 찾기</p>
        <p>패스워드 찾기</p>
        <p onClick={goSignUp} className="signup">
          회원가입
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
