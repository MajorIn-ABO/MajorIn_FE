import "../../styles/main/MainEmploy.scss";

const employData = [
  {
    recruit: "모짐 마감",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    info: "신규 서비스 플랫폼 기획자(경력) 채용",
  },
  {
    recruit: "모짐 마감",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    info: "신규 서비스 플랫폼 기획자(경력) 채용",
  },
  {
    recruit: "모짐 마감",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    info: "신규 서비스 플랫폼 기획자(경력) 채용",
  },
  {
    recruit: "모짐 마감",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    info: "신규 서비스 플랫폼 기획자(경력) 채용",
  },
  {
    recruit: "모짐 마감",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    info: "신규 서비스 플랫폼 기획자(경력) 채용",
  },
  {
    recruit: "모짐 마감",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    info: "신규 서비스 플랫폼 기획자(경력) 채용",
  },
];

const MainEmploy = () => {
  return (
    <div>
      <div className="title">
        <h1>🏢 취업 정보</h1>
      </div>
      <div className="employ-content">
        {employData.map((item, index) => (
          <div className="employ-box" key={index}>
            <div className="employ-top">
              <img
                src="https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png"
                alt="img"
              />
            </div>
            <div className="employ-middle">
              <div>
                <span className="category">{item.recruit}</span>
                <span>~ {item.deadline}</span>
              </div>
              <div className="employ-info">
                <h1>{item.company}</h1>
                <p>{item.info}</p>
              </div>
            </div>
            <div className="employ-bottom">
              <p>
                자세히보기 <span>&gt;</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainEmploy;
