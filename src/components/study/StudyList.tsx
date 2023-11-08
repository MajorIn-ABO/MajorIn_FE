import { ReactComponent as PencilIcon } from "../../assets/icon/pencil.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import { useState } from "react";
import "../../styles/study/StudyList.scss";

const studyData = [
  {
    recruiting: "모집중",
    title: "리액트 JS, 타입스크립트 스터디 모집",
    description:
      "안녕하세요. 웹 프론트엔드 스터디원 구합니다. 스터디 주제: 리액트 JS, 타입스크립트  스터디 진행 방..",
    hashtags: ["서울", "프론트엔드", "React JS"],
    school: "단국대학교 소프트웨어학과 20학번",
    date: "10분전",
    chat: 10,
    like: 7,
  },
  {
    recruiting: "모집완료",
    title: "리액트 JS, 타입스크립트 스터디 모집",
    description:
      "안녕하세요. 웹 프론트엔드 스터디원 구합니다. 스터디 주제: 리액트 JS, 타입스크립트  스터디 진행 방..",
    hashtags: ["프론트엔드", "React JS"],
    school: "단국대학교 소프트웨어학과 20학번",
    date: "10분전",
    chat: 10,
    like: 7,
  },
  {
    recruiting: "모집중",
    title: "리액트 JS, 타입스크립트 스터디 모집",
    description:
      "안녕하세요. 웹 프론트엔드 스터디원 구합니다. 스터디 주제: 리액트 JS, 타입스크립트  스터디 진행 방..",
    hashtags: [],
    school: "단국대학교 소프트웨어학과 20학번",
    date: "10분전",
    chat: 10,
    like: 7,
  },
];

const StudyList = () => {
  const [selectedFilter, setSelectedFilter] = useState("recent");
  const handleFilterChange = (filter: any) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      <div className="study-list-top">
        <ul>
          <li
            className={selectedFilter === "recent" ? "selected" : ""}
            onClick={() => handleFilterChange("recent")}
          >
            최신순
          </li>
          <li
            className={selectedFilter === "like" ? "selected" : ""}
            onClick={() => handleFilterChange("like")}
          >
            좋아요순
          </li>
          <li
            className={selectedFilter === "popular" ? "selected" : ""}
            onClick={() => handleFilterChange("popular")}
          >
            인기순
          </li>
        </ul>
        <button>
          <PencilIcon />
          글쓰기
        </button>
      </div>
      {studyData.map((item, index) => (
        <div key={index} className="study-list">
          <h1>
            <span
              className={`${
                item.recruiting === "모집중" ? "recruiting" : "completed"
              }`}
            >
              {item.recruiting}
            </span>
            {item.title}
          </h1>
          <p>{item.description}</p>
          {item.hashtags.map((hashtag, index) => (
            <span className="category" key={index}>
              # {hashtag}
            </span>
          ))}
          <footer>
            <div className="bottom-left">
              <p>{item.school} · </p>
              <p>{item.date}</p>
            </div>
            <div className="bottom-right">
              <ChatIcon stroke="#1B1C3A" />
              <p>{item.chat}</p>
              <LikeIcon stroke="#1B1C3A" />
              <p>{item.like}</p>
            </div>
          </footer>
        </div>
      ))}
    </div>
  );
};

export default StudyList;
