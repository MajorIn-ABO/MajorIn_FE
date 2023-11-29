import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import { ReactComponent as StarIcon } from "../../assets/icon/star-color.svg";
import { ReactComponent as PencilIcon } from "../../assets/icon/pencil.svg";
import { useState } from "react";
import "../../styles/community/CommunityMain.scss";

const data = [
  {
    category: "전공질문",
    title: "리액트 프로젝트에서 발생한 오류 질문",
    content:
      "리액트 프로젝트를 진행 중에 다음과 같은 오류를 만났습니다. 컴포넌트를 렌더링할 때마다 'Cannot read property of undefined'와 같은 오류가 발생하는데, 이 문제에 대해 도움을 받을 수 있는 방법이 있을까요?",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    category: "대외활동",
    title: "IT 분야에서의 커뮤니티 참여 경험 공유",
    content:
      "IT 분야에서의 대외활동이나 IT 커뮤니티에서의 참여 경험을 나누고 싶습니다. 어떤 활동에 참여했는지, 얻은 경험과 지식, 그리고 커뮤니티에서 어떤 변화를 느꼈는지에 대해 이야기해주시면 좋을 것 같아요!",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    category: "우리학교는",
    title: "🚀 우리학교의 IT 동아리, 코드마스터스를 소개합니다.",
    content:
      "🖥️ 동아리 소개 : 코드마스터스는 학교 내에서 개발자들이 모여 다양한 프로젝트를 경험하고, 기술을 공유하며 성장하는 커뮤니티입니다. 우리는 소프트웨어 개발, 웹 개발, 앱 개발, 데이터 과학 등 다양한 분야에서 활동하고 있어, 모든 개발자들이 자신의 관심 분야에서 역량을 키울 수 있습니다.",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    category: "인턴후기",
    title: "소프트웨어 개발자로서의 인턴 경험 공유",
    content:
      "난 여름에 소프트웨어 개발자로 인턴십을 진행한 경험을 공유하려고 합니다. 프로젝트에서 어떤 도전적인 과제를 만났는지, 팀원들과의 협업에서 느낀 점 등을 공유하면서 함께 이야기 나눠봐요.",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    category: "잡담/수다",
    title: "최근에 사용 중인 개발 도구 공유!",
    content:
      "최근에 사용 중인 개발 도구나 에디터가 있나요? 어떤 이유에서 그 도구를 선택했는지, 장단점이나 유용한 기능에 대해 이야기 나눠봐요. 나만의 개발 환경을 공유하면 다른 분들에게도 도움이 될 것 같아요!",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    category: "전공질문",
    title: "데이터베이스 설계 시 고려사항에 대해 질문드립니다.",
    content:
      "데이터베이스 설계에 관련하여 궁금한 점이 있어서 질문드립니다. 데이터베이스를 설계할 때 어떤 고려사항들이 있는지, 특히나 성능 최적화나 보안 측면에서 주의해야 할 점이 무엇인지 궁금합니다. 혹시 경험이나 조언을 공유해주실 수 있는 분이 계시다면 정말 감사하겠습니다! 🙏",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    category: "우리학교는",
    title: "우리학교의 블록체인 개발 동아리 블록메이커스를 소개합니다.",
    content:
      "🌐 동아리 목표: 블록메이커스는 블록체인 기술에 관심을 가지고 있는 학생들이 모여 함께 연구하고 개발하는 동아리입니다. 우리의 목표는 블록체인 기술을 활용하여 다양한 분야에서 혁신적인 프로젝트를 진행하며 지식을 공유하는 것입니다.    💡 활동 내역: 우리는 주기적인 스터디와 워크샵을 통해 블록체인의 기술적인 측면에서의 이해를 높이고, 실제 프로젝트를 통해 적용력을 키웁니다. 이를 통해 회원 간의 네트워킹과 블록체인 생태계에 기여하는 것을 목표로 하고 있습니다.",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
];

const CommunityMain: React.FC<{ onWriteButtonClick: () => void }> = ({
  onWriteButtonClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("전체보기");
  const filteredData = data.filter(
    (item) =>
      selectedCategory === "전체보기" || item.category === selectedCategory
  );

  return (
    <div className="community-container">
      <div className="search">
        <input type="text" placeholder="검색어를 입력해주세요" />
        <SearchIcon />
      </div>
      <div className="community-filtering">
        <ul>
          <li
            onClick={() => setSelectedCategory("전체보기")}
            className={selectedCategory === "전체보기" ? "selected" : ""}
          >
            전체보기
          </li>
          <li
            onClick={() => setSelectedCategory("전공질문")}
            className={selectedCategory === "전공질문" ? "selected" : ""}
          >
            전공질문
          </li>
          <li
            onClick={() => setSelectedCategory("잡담/수다")}
            className={selectedCategory === "잡담/수다" ? "selected" : ""}
          >
            잡담/수다
          </li>
          <li
            onClick={() => setSelectedCategory("인턴후기")}
            className={selectedCategory === "인턴후기" ? "selected" : ""}
          >
            인턴후기
          </li>
          <li
            onClick={() => setSelectedCategory("대외활동")}
            className={selectedCategory === "대외활동" ? "selected" : ""}
          >
            대외활동
          </li>
          <li
            onClick={() => setSelectedCategory("우리학교는")}
            className={selectedCategory === "우리학교는" ? "selected" : ""}
          >
            우리학교는
          </li>
        </ul>
        <button onClick={onWriteButtonClick}>
          <PencilIcon />
          글쓰기
        </button>
      </div>
      {filteredData.map((item, index) => (
        <div key={index} className="community-content">
          <div className="content-top">
            <span className="category">{item.category}</span>
            <p>{item.date}</p>
          </div>
          <div className="content-middle">
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
          <div className="content-bottom">
            <p className="writer">{item.writer}</p>
            <div className="content-numbers">
              <ChatIcon stroke="#44B0FF" />
              <p className="color-chat">{item.chat}</p>
              <LikeIcon stroke="#FF8181" />
              <p className="color-like">{item.like}</p>
              <StarIcon />
              <p className="color-scrap">{item.scrap}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityMain;
