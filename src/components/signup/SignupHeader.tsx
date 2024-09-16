import Logo from "@/assets/icon/logo.svg?react";
import { useNavigate, Outlet } from "react-router-dom";

const SignupHeader = () => {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };
  const goHome = () => {
    navigate("/home");
  };
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left" onClick={goHome}>
          <Logo />
          <div className="header-name">
            <p>메이저인</p>
            <p>MajorIn</p>
          </div>
        </div>
        <div className="header-right">
          <div className="header-login">
            <button onClick={goLogin}>로그인</button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SignupHeader;
