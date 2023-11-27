import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import { ReactComponent as StarIcon } from "../../assets/icon/star-color.svg";
import { ReactComponent as PencilIcon } from "../../assets/icon/pencil.svg";
import { useState } from "react";
import "../../styles/community/CommunityMain.scss";

const data = [
  {
    category: "인턴후기",
    title: "글 제목 글 제목 글 제목",
    content: "ksfjladjflkmsdnfwnqkfmwlaemfelq;mrkwqejrkwem",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    category: "전공질문",
    title: "글 제목 글 제목 글 제목",
    content: "ksfjladjflkmsdnfwnqkfmwlaemfelq;mrkwqejrkwem",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    category: "인턴후기",
    title: "글 제목 글 제목 글 제목",
    content: "ksfjladjflkmsdnfwnqkfmwlaemfelq;mrkwqejrkwem",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    category: "대외활동",
    title: "글 제목 글 제목 글 제목",
    content: "ksfjladjflkmsdnfwnqkfmwlaemfelq;mrkwqejrkwem",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
  {
    category: "잡담/수다",
    title: "글 제목 글 제목 글 제목",
    content: "ksfjladjflkmsdnfwnqkfmwlaemfelq;mrkwqejrkwem",
    writer: "장** 단국대학교 소프트웨어학과 20학번",
    date: "23.09.18",
    chat: 5,
    like: 5,
    scrap: 5,
  },
];

const CommunityMain = () => {
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
        <button>
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
