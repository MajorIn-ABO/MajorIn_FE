import "../../styles/study/PopularStudy.scss";

const data = [
  {
    title: "리액트 JS, 타입스크립트 스터디 모집",
    writer: "단국대학교 소프트웨어학과 20학번",
  },
  {
    title: "리액트 JS, 타입스크립트 스터디 모집",
    writer: "단국대학교 소프트웨어학과 20학번",
  },
  {
    title: "리액트 JS, 타입스크립트 스터디 모집",
    writer: "단국대학교 소프트웨어학과 20학번",
  },
  {
    title: "리액트 JS, 타입스크립트 스터디 모집",
    writer: "단국대학교 소프트웨어학과 20학번",
  },
  {
    title: "리액트 JS, 타입스크립트 스터디 모집",
    writer: "단국대학교 소프트웨어학과 20학번",
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
