import "../../styles/home/HomeSearch.scss";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { useNavigate } from "react-router-dom";

const HomeSearch = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/main");
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
      <div className="home-major-list" onClick={goMain}>
        <p>경영경제</p>
        <span>경영, 회계, 마케팅, 금융, 경제</span>
      </div>
      <div className="home-major-list" onClick={goMain}>
        <p>인문사회과학</p>
        <span>국어국문, 영어영문, 사회학, 심리학, 정치외교, 사학,</span>
      </div>
      <div className="home-major-list" onClick={goMain}>
        <p>공과</p>
        <span>전자공학, 기계공학, 화학공학, 건축공학, 신소재공학</span>
      </div>
      <div className="home-major-list" onClick={goMain}>
        <p>자연과학</p>
        <span>물리학, 화학, 생물학, 지구과학, 수학, 통계학</span>
      </div>
      <div className="home-major-list" onClick={goMain}>
        <p>예술대학</p>
        <span>미술, 패션디자인, 음악, 연극영화, 무용</span>
      </div>
    </div>
  );
};

export default HomeSearch;
