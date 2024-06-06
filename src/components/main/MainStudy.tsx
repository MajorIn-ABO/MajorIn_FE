import { ReactComponent as CalendarIcon } from "../../assets/icon/calender.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import "../../styles/main/MainStudy.scss";

const studyData = [
  {
    school: "한양대학교 컴퓨터공학과 20학번",
    title: "프론트엔드 개발 스터디 모집합니다!",
    content:
      "React 및 JavaScript를 공부하고 있는데 함께 공부할 스터디원을 모집합니다. 관심 있으신 분은 연락주세요!",
    deadline: "24.05.21",
    chat: 21,
    like: 30,
  },
  {
    school: "서울대학교 컴퓨터공학부 19학번",
    title: "백엔드 개발 스터디 참여자 모집합니다!",
    content:
      "Java와 Spring을 중심으로 백엔드 개발을 공부하고 있는데 함께 공부할 스터디원을 찾습니다. 관심 있으신 분은 연락주세요!",
    deadline: "24.05.25",
    chat: 10,
    like: 23,
  },
  {
    school: "성균관대학교 컴퓨터공학과 20학번",
    title: "데이터 분석 스터디 모집합니다!",
    content:
      "Python과 Pandas 등을 활용하여 데이터 분석을 공부하고 있습니다. 함께 공부할 스터디원을 모집합니다. 관심 있으신 분은 연락주세요!",
    deadline: "24.05.28",
    chat: 7,
    like: 20,
  },
  {
    school: "고려대학교 컴퓨터소프트웨어학부 20학번",
    title: "알고리즘 스터디 참여자 구합니다!",
    content:
      "다양한 알고리즘 문제를 풀고 함께 공부할 스터디원을 찾습니다. 관심 있으신 분은 연락주세요!",
    deadline: "24.05.20",
    chat: 11,
    like: 15,
  },
  {
    school: "경희대학교 컴퓨터공학과 20학번",
    title: "인공지능 스터디 참여자 모집합니다!",
    content:
      "머신러닝 및 딥러닝을 공부하고 있는데 함께 공부할 스터디원을 모집합니다. 관심 있으신 분은 연락주세요!",
    deadline: "24.05.31",
    chat: 7,
    like: 10,
  },
];

const MainStudy = () => {
  return (
    <div>
      <div className="title">
        <h1>🔥 실시간 HOT 스터디</h1>
      </div>
      <div className="study-content">
        {studyData.map((item, index) => (
          <div className="study-box" key={index}>
            <div className="study-top">
              <div>
                <img
                  src={require("../../assets/img/dku-logo.png")}
                  alt="logo"
                />
                <p>{item.school}</p>
              </div>
              <p>
                자세히보기 <span>&gt;</span>
              </p>
            </div>
            <div className="study-middle">
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </div>
            <div className="study-bottom">
              <div className="study-deadline">
                <CalendarIcon />
                <p>~{item.deadline}</p>
              </div>
              <div className="study-numbers">
                <ChatIcon stroke="#1B1C3A" />
                <p>{item.chat}</p>
                <LikeIcon stroke="#1B1C3A" />
                <p>{item.like}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainStudy;
