import { ReactComponent as PencilIcon } from "../../assets/icon/pencil.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import "../../styles/study/StudyList.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import data, { StudyData } from "../../data/StudyData";
import { fetchData } from "../../api/fetchData";
import { StudyData } from "../../types/Types";

interface StudySearchProps {
  selectedFilter: string;
}

const StudyList: React.FC<StudySearchProps> = ({ selectedFilter }) => {
  const [studyData, setStudyData] = useState<StudyData[]>([]);

  useEffect(() => {
    const fetchStudyData = async () => {
      const data = await fetchData("/studys/posts/");
      setStudyData(data);
    };

    fetchStudyData();
  }, []);

  const filteredStudyData: StudyData[] = studyData.filter(
    (item) =>
      selectedFilter === "all" ||
      (selectedFilter === "recruiting" && item.is_recruited === false) ||
      (selectedFilter === "recruited" && item.is_recruited === true)
  );

  const [selectedFilter2, setSelectedFilter2] = useState("recent");
  const handleFilterChange = (filter: any) => {
    setSelectedFilter2(filter);
  };

  const navigate = useNavigate();

  const handleItemClick = (studyId: number) => {
    navigate(`/study/${studyId}`);
  };

  const handleStudyWrite = () => {
    navigate("/study/write");
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
        <button onClick={handleStudyWrite}>
          <PencilIcon />
          글쓰기
        </button>
      </div>
      {filteredStudyData.map((item, index) => (
        <div
          key={index}
          className="study-list"
          onClick={() => handleItemClick(item.id)}
        >
          <h1>
            <span
              className={`${
                item.is_recruited === false ? "recruiting" : "recruited"
              }`}
            >
              {item.is_recruited === false ? "모집중" : "모집완료"}
            </span>
            {item.title}
          </h1>
          <p>{item.contents}</p>
          {item.hashtags.map((hashtag, index) => (
            <span className="category" key={index}>
              # {hashtag}
            </span>
          ))}
          <footer>
            <div className="bottom-left">
              <p>
                {item.school_name} {item.major_name}{" "}
                {String(item.admission_date).slice(-2)}학번 ·{" "}
              </p>
              <p>
                {new Date(item.post_date).toLocaleString("ko-KR", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
            </div>
            <div className="bottom-right">
              <ChatIcon stroke="#1B1C3A" />
              <p>{item.comment}</p>
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
