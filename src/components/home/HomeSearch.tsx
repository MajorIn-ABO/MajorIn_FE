import "../../styles/home/HomeSearch.scss";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { useNavigate } from "react-router-dom";

const HomeSearch = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };
  return (
    <div className="home-search-container">
      <h1>나에게 맞는 학과 게시판 찾아보기</h1>
      <div className="home-search-box">
        <input type="text" placeholder="학과, 전공을 검색하세요." />
        <SearchIcon />
      </div>
      <div className="home-major-list" onClick={goMain}>
        <p>IT</p>
        <span>
          컴퓨터공학, 소프트웨어, 정보통신, 정보보호, IT융합, 멀티미디어
        </span>
      </div>
    </div>
  );
};

export default HomeSearch;
