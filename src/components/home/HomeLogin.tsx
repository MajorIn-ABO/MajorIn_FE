import AppLogo from "@/assets/img/appLogo.png";
import "@/styles/home/HomeLogin.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postData } from "@/api/postData";
import { useAuth } from "@/hooks/useAuth";

const HomeLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const loginData = {
      username,
      password,
    };

    try {
      const response = await postData("/login/", loginData);

      if (response) {
        const data = await response.token;
        login(
          data.access,
          data.refresh,
          data.user_name,
          data.school_name,
          data.major_name,
          data.admission_date,
          data.user_id,
          data.major_id,
          data.major_category_name
        );
        // alert("로그인에 성공하였습니다.");
        navigate("/main");
        window.location.reload();
      } else {
        throw new Error("Invalid response");
      }
    } catch (error) {
      setErrorMessage(
        "로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요."
      );
    }
  };

  const goSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="home-login-container">
      <div className="logo">
        <img src={AppLogo} alt="logo" />
      </div>
      <form className="login" onSubmit={handleLogin}>
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input type="submit" value="로그인" onSubmit={handleLogin} />
      </form>
      <div className="login-bottom">
        <p>아이디 찾기</p>
        <p>패스워드 찾기</p>
        <p onClick={goSignUp}>회원가입</p>
      </div>
    </div>
  );
};

export default HomeLogin;
