import "../../styles/study/PopularStudy.scss";

const data = [
  {
    title: "리액트 JS, 타입스크립트 스터디 모집",
    writer: "단국대학교 소프트웨어학과 20학번",
  },
  {
    title: "웹 개발 스터디 모집합니다!",
    writer: "서울대학교 컴퓨터공학과 19학번",
  },
  {
    title: "자료구조 알고리즘 스터디 참여자 모집",
    writer: "한양대학교 정보통신공학과 21학번",
  },
  {
    title: "파이썬 기초부터 공부해요!",
    writer: "성균관대학교 컴퓨터공학과 22학번",
  },
  {
    title: "자바 개발자 모집합니다!",
    writer: "연세대학교 소프트웨어학과 18학번",
  },
];

const PopularStudy = () => {
  return (
    <div className="popular-study-container">
      <h1>🔥 주간 인기 스터디</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>{item.title}</p>
            <div>
              <img src={require("../../assets/img/dku-logo.png")} alt="logo" />
              <p>{item.writer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularStudy;
