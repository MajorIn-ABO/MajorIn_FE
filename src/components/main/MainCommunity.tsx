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
    writer: "장**",
    school: "단국대학교 소프트웨어학과 20학번",
    date: "23.11.01",
    category: "인턴후기",
    title: "글 제목1",
    content: "글 내용 글 내용 글 내용",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    writer: "장**",
    school: "단국대학교 소프트웨어학과 20학번",
    date: "23.11.01",
    category: "인턴후기",
    title: "글 제목2",
    content: "글 내용 글 내용 글 내용",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    writer: "장**",
    school: "단국대학교 소프트웨어학과 20학번",
    date: "23.11.01",
    category: "인턴후기",
    title: "글 제목3",
    content: "글 내용 글 내용 글 내용",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    writer: "장**",
    school: "단국대학교 소프트웨어학과 20학번",
    date: "23.11.01",
    category: "인턴후기",
    title: "글 제목4",
    content: "글 내용 글 내용 글 내용",
    chat: 5,
    like: 5,
    scrap: 5,
  },
];
// 데이터의 아이콘 컴포넌트 배열

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
              <IconOne />
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
