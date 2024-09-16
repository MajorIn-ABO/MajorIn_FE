import PencilIcon from "@/assets/icon/pencil.svg?react";
import ChatIcon from "@/assets/icon/chat-color.svg?react";
import LikeIcon from "@/assets/icon/like-color.svg?react";
import "@/styles/study/StudyList.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "@/api/fetchData";
import { StudyData } from "@/types/Types";

interface StudySearchProps {
  selectedFilter: string;
  searchText: string;
}

const StudyList: React.FC<StudySearchProps> = ({
  selectedFilter,
  searchText,
}) => {
  const [studyData, setStudyData] = useState<StudyData[]>([]);
  const [selectedFilter2, setSelectedFilter2] = useState("recent");

  useEffect(() => {
    const fetchStudyData = async () => {
      let endpoint = "/studys/posts/";
      if (searchText.trim() !== "") {
        endpoint = `/studys/posts/search/?hashtag=${searchText}&keyword=${searchText}`;
      } else {
        switch (selectedFilter2) {
          case "like":
            endpoint = "/studys/posts/?sort_by=likes";
            break;
          case "comment":
            endpoint = "/studys/posts/?sort_by=comments";
            break;
          case "recent":
          default:
            endpoint = "/studys/posts/?sort_by=latest";
            break;
        }
      }

      const data = await fetchData(endpoint);
      setStudyData(data);
    };

    fetchStudyData();
  }, [searchText, selectedFilter2]);

  const filteredStudyData: StudyData[] = studyData.filter(
    (item) =>
      selectedFilter === "all" ||
      (selectedFilter === "recruiting" && item.is_recruited === false) ||
      (selectedFilter === "recruited" && item.is_recruited === true)
  );

  const handleFilterChange = (filter: any) => {
    setSelectedFilter2(filter);
  };

  const navigate = useNavigate();

  const handleItemClick = (studyId: number) => {
    navigate(`/main/study/${studyId}`);
  };

  const handleStudyWrite = () => {
    navigate("/main/study/write");
  };

  const stripHtmlTags = (htmlString: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || "";
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
            className={selectedFilter2 === "comment" ? "selected" : ""}
            onClick={() => handleFilterChange("comment")}
          >
            댓글많은순
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
          <p>{stripHtmlTags(item.contents)}</p>
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
