import "../../styles/navbar/Header.scss";
import { ReactComponent as Logo } from "../../assets/icon/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
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
        <div className="header-left">
          <Logo onClick={goHome} />
          <div className="header-name">
            <p>IT</p>
            <p>MajorIn</p>
          </div>
        </div>
        <div className="header-right">
          <div className="header-search">
            <input type="text" placeholder="검색할 키워드를 입력하세요." />
            <SearchIcon />
          </div>
          <div className="header-login">
            <button onClick={goLogin}>로그인</button>
            <button onClick={goSignUp}>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
