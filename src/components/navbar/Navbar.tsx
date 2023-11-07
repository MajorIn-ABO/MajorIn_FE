import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../styles/navbar/Navbar.scss";
import { ReactComponent as HomeIcon } from "../../assets/icon/home.svg";
import { ReactComponent as StudyIcon } from "../../assets/icon/study.svg";
import { ReactComponent as CommunityIcon } from "../../assets/icon/community.svg";
import { ReactComponent as BookIcon } from "../../assets/icon/book.svg";
import { ReactComponent as MypageIcon } from "../../assets/icon/mypage.svg";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9b9b9b;
  font-weight: 700;
  display: flex;
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

  const goLogin = () => {
    navigate("/login");
  };

  const goSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="navbar">
      <div className="navbar-login">
        <p>
          커뮤니티 이용을 위해 <br />
          로그인이 필요합니다.
        </p>
        <button onClick={goLogin}>로그인</button>
        <button onClick={goSignUp}>회원가입</button>
      </div>
      <div className="menu-list">
        <ul>
          <StyledLink
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            <HomeIcon
              fill={location.pathname === "/" ? "#1b1c3a" : "#9b9b9b"}
            />
            <p>홈</p>
          </StyledLink>
          <StyledLink
            to="/study"
            className={location.pathname === "/study" ? "active" : ""}
          >
            <StudyIcon
              fill={location.pathname === "/study" ? "#1b1c3a" : "#9b9b9b"}
              stroke={location.pathname === "/study" ? "#1b1c3a" : "#9b9b9b"}
            />
            <p>스터디</p>
          </StyledLink>
          <StyledLink
            to="/community"
            className={location.pathname === "/community" ? "active" : ""}
          >
            <CommunityIcon
              stroke={
                location.pathname === "/community" ? "#1b1c3a" : "#9b9b9b"
              }
            />
            <p>커뮤니티</p>
          </StyledLink>
          <StyledLink
            to="/trade"
            className={location.pathname === "/trade" ? "active" : ""}
          >
            <BookIcon
              fill={location.pathname === "/trade" ? "#1b1c3a" : "#9b9b9b"}
            />
            <p>중고거래</p>
          </StyledLink>
          <StyledLink
            to="/mypage"
            className={location.pathname === "/mypage" ? "active" : ""}
          >
            <MypageIcon
              fill={location.pathname === "/mypage" ? "#1b1c3a" : "#9b9b9b"}
            />
            <p>마이페이지</p>
          </StyledLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
