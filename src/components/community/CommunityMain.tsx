import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import { ReactComponent as ScrapIcon } from "../../assets/icon/scrap-color.svg";
import { ReactComponent as PencilIcon } from "../../assets/icon/pencil.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/community/CommunityMain.scss";
import comdata, { CommunityData } from "../../data/CommunityData";

const CommunityMain: React.FC<{ onWriteButtonClick: () => void }> = ({
  onWriteButtonClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("전체보기");
  const filteredData: CommunityData[] = comdata.filter(
    (item) =>
      selectedCategory === "전체보기" || item.category === selectedCategory
  );
  const navigate = useNavigate();

  const handleItemClick = (contentId: number) => {
    navigate(`/community/${contentId}`);
  };

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
        <div
          key={index}
          className="community-content"
          onClick={() => handleItemClick(item.contentId)}
        >
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
              <ChatIcon stroke="#66BB6A" />
              <p className="color-chat">{item.chat}</p>
              <LikeIcon stroke="#FF8181" />
              <p className="color-like">{item.like}</p>
              <ScrapIcon />
              <p className="color-scrap">{item.scrap}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityMain;
