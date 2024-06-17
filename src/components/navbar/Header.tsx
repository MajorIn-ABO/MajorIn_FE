import "../../styles/navbar/Header.scss";
import { ReactComponent as Logo } from "../../assets/icon/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const storedAuth = localStorage.getItem("auth");
  const localAuth = storedAuth ? JSON.parse(storedAuth) : null;
  const majorName = localAuth ? localAuth.major_category_name : null;

  const goHome = () => {
    navigate("/");
  };
  const goLogin = () => {
    navigate("/login");
  };
  const goSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="header">
      <div className="header-container">
        <div
          className="header-left"
          style={{ cursor: auth.isLoggedIn ? "default" : "pointer" }}
        >
          <Logo onClick={auth.isLoggedIn ? undefined : goHome} />
          <div className="header-name">
            <p>{majorName}</p>
            <p>MajorIn</p>
          </div>
        </div>
        <div className="header-right">
          <div className="header-search">
            <input type="text" placeholder="검색할 키워드를 입력하세요." />
            <SearchIcon />
          </div>
          {auth.isLoggedIn ? (
            <div className="header-login">
              <button onClick={logout}>로그아웃</button>
            </div>
          ) : (
            <div className="header-login">
              <button onClick={goLogin}>로그인</button>
              <button onClick={goSignUp}>회원가입</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
