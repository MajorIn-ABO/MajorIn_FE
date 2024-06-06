import { ReactComponent as MedalIcon } from "../../assets/icon/medal.svg";
import { ReactComponent as IconOne } from "../../assets/icon/number1.svg";
import { ReactComponent as IconTwo } from "../../assets/icon/number2.svg";
import { ReactComponent as IconThree } from "../../assets/icon/number3.svg";
import { ReactComponent as IconFour } from "../../assets/icon/number4.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import { ReactComponent as ScrapIcon } from "../../assets/icon/scrap-color.svg";
import "../../styles/main/MainCommunity.scss";
import { useNavigate } from "react-router-dom";

const data = [
  {
    writer: "홍**",
    school: "서울대학교 컴퓨터공학과 19학번",
    date: "2024-05-15",
    category: "인턴리뷰",
    title: "인턴 경험 공유합니다!",
    content:
      "저는 최근에 네이버에서 소프트웨어 엔지니어링 부서에서 3개월 동안 인턴을 하게 되었습니다. 이 경험은 제게 매우 의미있고 흥미로웠습니다. 프로젝트 팀원들과의 협업을 통해 실제 업무 환경에서의 소프트웨어 개발 과정을 경험할 수 있었으며, 새로운 기술과 도구들을 배우고 적용해보는 과정에서 많은 성장을 이루었습니다. 또한, 업무 중 발생하는 다양한 문제들을 해결하는 과정에서 창의적인 해결책을 모색하고 구현함으로써 실무 역량을 키워나갈 수 있었습니다. 이러한 경험을 통해 소프트웨어 엔지니어로서의 역량을 향상시키고, 향후의 경력 발전에 큰 도움이 될 것으로 기대하고 있습니다.",
    chat: 30,
    like: 45,
    scrap: 10,
  },
  {
    writer: "김**",
    school: "한양대학교 컴퓨터소프트웨어학부 20학번",
    date: "2024-05-17",
    category: "잡담/수다",
    title: "자바스크립트 스터디원 구합니다!",
    content:
      "자바스크립트를 공부하고 있는데 함께 공부할 동료를 구합니다. 관심 있으신 분은 연락주세요!",
    chat: 23,
    like: 33,
    scrap: 7,
  },
  {
    writer: "박**",
    school: "단국대학교 소프트웨어학과 21학번",
    date: "2024-05-17",
    category: "학과질문",
    title: "대기업 취업에 관한 질문드립니다.",
    content:
      "최근에 대기업 취업 준비를 시작했는데, 어떤 준비가 필요한지 조언 부탁드립니다.",
    chat: 12,
    like: 20,
    scrap: 5,
  },
  {
    writer: "이**",
    school: "중앙대학교 소프트웨어학부 22학번",
    date: "2024-05-18",
    category: "대외활동",
    title: "봉사활동 참여자 모집합니다!",
    content:
      "다음 주에 봉사활동을 진행하려고 하는데, 함께 참여할 사람을 찾습니다. 관심 있으신 분은 연락주세요!",
    chat: 6,
    like: 15,
    scrap: 2,
  },
];

const MainCommunity = () => {
  const navigate = useNavigate();
  const goCommunity = () => {
    navigate("/community");
  };
  return (
    <div>
      <div className="title">
        <div>
          <MedalIcon />
          <h1>커뮤니티 인기글</h1>
        </div>
        <p onClick={goCommunity}>
          전체보기 <span>&gt;</span>
        </p>
      </div>
      <div className="content">
        {data.map((item, index) => (
          <div key={index} className="content-box">
            <div className="content-box-top">
              {index === 0 && <IconOne />}
              {index === 1 && <IconTwo />}
              {index === 2 && <IconThree />}
              {index === 3 && <IconFour />}
              <div className="content-writer-info">
                <div>
                  <p>{item.writer}</p>
                  <p>{item.date}</p>
                </div>
                <p>{item.school}</p>
              </div>
            </div>
            <div className="content-middle">
              <span className="category">{item.category}</span>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </div>
            <div className="content-box-bottom">
              <div className="content-numbers">
                <ChatIcon stroke="#66BB6A" />
                <p className="color-chat">{item.chat}</p>
                <LikeIcon stroke="#FF8181" />
                <p className="color-like">{item.like}</p>
                <ScrapIcon />
                <p className="color-scrap">{item.scrap}</p>
              </div>
              <button>자세히보기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCommunity;
