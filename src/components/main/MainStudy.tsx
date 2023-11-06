import { ReactComponent as CalendarIcon } from "../../assets/icon/calender.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import "../../styles/main/MainStudy.scss";

const studyData = [
  {
    school: "단국대학교 소프트웨어학과 20학번",
    title: "스터디 제목 스터디 제목 스터디 제목",
    content: "스터디 내용 스터디 내용 스터디 내용",
    deadline: "23.09.18",
    chat: 21,
    like: 30,
  },
  {
    school: "단국대학교 소프트웨어학과 20학번",
    title: "스터디 제목 스터디 제목 스터디 제목",
    content: "스터디 내용 스터디 내용 스터디 내용",
    deadline: "23.09.18",
    chat: 21,
    like: 30,
  },
  {
    school: "단국대학교 소프트웨어학과 20학번",
    title: "스터디 제목 스터디 제목 스터디 제목",
    content: "스터디 내용 스터디 내용 스터디 내용",
    deadline: "23.09.18",
    chat: 21,
    like: 30,
  },
  {
    school: "단국대학교 소프트웨어학과 20학번",
    title: "스터디 제목 스터디 제목 스터디 제목",
    content: "스터디 내용 스터디 내용 스터디 내용",
    deadline: "23.09.18",
    chat: 21,
    like: 30,
  },
  {
    school: "단국대학교 소프트웨어학과 20학번",
    title: "스터디 제목 스터디 제목 스터디 제목",
    content: "스터디 내용 스터디 내용 스터디 내용",
    deadline: "23.09.18",
    chat: 21,
    like: 30,
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
          <div className="study-box">
            <div className="study-top">
              <div>
                <img
                  src={require("../../assets/img/dku-logo.png")}
                  alt="logo"
                />
                <p>{item.school}</p>
              </div>
              <p>자세히보기</p>
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
