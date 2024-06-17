import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../styles/navbar/Navbar.scss";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as HomeIcon } from "../../assets/icon/home.svg";
import { ReactComponent as StudyIcon } from "../../assets/icon/study.svg";
import { ReactComponent as CommunityIcon } from "../../assets/icon/community.svg";
import { ReactComponent as BookIcon } from "../../assets/icon/book.svg";
import { ReactComponent as MypageIcon } from "../../assets/icon/mypage.svg";
import { useAuth } from "../../hooks/useAuth";
import { useRecoilValue } from "recoil";
import { loginState } from "../../data/recoilAtoms";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9b9b9b;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 10px 0 10px 15px;
  gap: 10px;

  &.active {
    color: #1b1c3a;
    border-radius: 15px 0px 0px 15px;
    background: #fafafa;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const userInfo = useRecoilValue(loginState);

  const goLogin = () => {
    navigate("/login");
  };

  const goSignUp = () => {
    navigate("/signup");
  };

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    to: string
  ) => {
    event.preventDefault();
    if (auth.isLoggedIn) {
      navigate(to);
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-login">
        {auth.isLoggedIn ? (
          <div className="navbar-login-on">
            <p>
              <UserIcon width="48" height="48" />
            </p>
            <p>
              {userInfo.school_name}
              <br />
              {userInfo.major_name}
            </p>
            <h1>{userInfo.user_name}님</h1>
            <button onClick={logout} className="logout-btn">
              로그아웃
            </button>
          </div>
        ) : (
          <div className="navbar-login">
            <p>
              커뮤니티 이용을 위해 <br />
              로그인이 필요합니다.
            </p>
            <button onClick={goLogin}>로그인</button>
            <button onClick={goSignUp}>회원가입</button>
          </div>
        )}
      </div>
      <div className="menu-list">
        <ul>
          <StyledLink
            to="/main"
            className={location.pathname === "/main" ? "active" : ""}
          >
            <HomeIcon
              fill={location.pathname === "/main" ? "#1b1c3a" : "#9b9b9b"}
            />
            <p>홈</p>
          </StyledLink>
          <StyledLink
            to="/main/study"
            onClick={(e) => handleClick(e, "/main/study")}
            className={location.pathname === "/main/study" ? "active" : ""}
          >
            <StudyIcon
              fill={location.pathname === "/main/study" ? "#1b1c3a" : "#9b9b9b"}
              stroke={
                location.pathname === "/main/study" ? "#1b1c3a" : "#9b9b9b"
              }
            />
            <p>스터디</p>
          </StyledLink>
          <StyledLink
            to="/main/community"
            onClick={(e) => handleClick(e, "/main/community")}
            className={location.pathname === "/main/community" ? "active" : ""}
          >
            <CommunityIcon
              stroke={
                location.pathname === "/main/community" ? "#1b1c3a" : "#9b9b9b"
              }
            />
            <p>커뮤니티</p>
          </StyledLink>
          <StyledLink
            to="/main/trade"
            onClick={(e) => handleClick(e, "/main/trade")}
            className={location.pathname === "/main/trade" ? "active" : ""}
          >
            <BookIcon
              fill={location.pathname === "/main/trade" ? "#1b1c3a" : "#9b9b9b"}
            />
            <p>중고거래</p>
          </StyledLink>
          <StyledLink
            to="/main/mypage"
            onClick={(e) => handleClick(e, "/main/mypage")}
            className={location.pathname === "/main/mypage" ? "active" : ""}
          >
            <MypageIcon
              fill={
                location.pathname === "/main/mypage" ? "#1b1c3a" : "#9b9b9b"
              }
            />
            <p>마이페이지</p>
          </StyledLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
