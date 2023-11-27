const data = [
  {
    title: "카카오 모집 공고 떴는데..",
    writer: "단국대학교 소프트웨어학과 20학번",
  },
  {
    title: "운영체제 질문 좀 받아주실분",
    writer: "단국대학교 소프트웨어학과 20학번",
  },
  {
    title: "프론트엔드 개발자 되려면",
    writer: "단국대학교 소프트웨어학과 20학번",
  },
  {
    title: "네이버 부스트캠프 모집",
    writer: "단국대학교 소프트웨어학과 20학번",
  },
  {
    title: "SKT DEVOCEAN YOUNG 3기 모집",
    writer: "단국대학교 소프트웨어학과 20학번",
  },
];

const PopularCommunity = () => {
  return (
    <div className="popular-study-container">
      <h1>🔥 주간 인기 게시글</h1>
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

export default PopularCommunity;
