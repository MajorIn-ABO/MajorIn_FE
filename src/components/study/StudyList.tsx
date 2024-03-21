import { ReactComponent as PencilIcon } from "../../assets/icon/pencil.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/study/StudyList.scss";
import data, { StudyData } from "../../data/StudyData";

interface StudySearchProps {
  selectedFilter: string;
}

const StudyList: React.FC<StudySearchProps> = ({ selectedFilter }) => {
  const filteredStudyData: StudyData[] = data.filter(
    (item) =>
      selectedFilter === "all" ||
      item.recruiting.toLowerCase() === selectedFilter
  );

  const [selectedFilter2, setSelectedFilter2] = useState("recent");
  const handleFilterChange = (filter: any) => {
    setSelectedFilter2(filter);
  };

  const navigate = useNavigate();

  const handleItemClick = (studyId: number) => {
    navigate(`/study/${studyId}`);
  };

  return (
    <div>
      <div className="study-list-top">
        <ul>
          <li
            className={selectedFilter2 === "recent" ? "selected" : ""}
            onClick={() => handleFilterChange("recent")}
          >
            최신순
          </li>
          <li
            className={selectedFilter2 === "like" ? "selected" : ""}
            onClick={() => handleFilterChange("like")}
          >
            좋아요순
          </li>
          <li
            className={selectedFilter2 === "popular" ? "selected" : ""}
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
      {filteredStudyData.map((item, index) => (
        <div
          key={index}
          className="study-list"
          onClick={() => handleItemClick(item.studyId)}
        >
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
