// import { ReactComponent as CalendarIcon } from "../../assets/icon/calender.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import "../../styles/main/MainStudy.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../../api/fetchData";
import { StudyData } from "../../types/Types";

const MainStudy = () => {
  const [studyData, setStudyData] = useState<StudyData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudyData = async () => {
      const data = await fetchData("/studys/posts/?sort_by=weekly_popular");
      setStudyData(data);
    };

    fetchStudyData();
  }, []);

  const handleItemClick = (studyId: number) => {
    navigate(`/main/study/${studyId}`);
  };

  const stripHtmlTags = (htmlString: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

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
                <p>
                  {item.school_name} {item.major_name}{" "}
                  {String(item.admission_date).slice(-2)}학번
                </p>
              </div>
              <p
                onClick={() => handleItemClick(item.id)}
                style={{ cursor: "pointer" }}
              >
                자세히보기 <span>&gt;</span>
              </p>
            </div>
            <div className="study-middle">
              <h1>{item.title}</h1>
              <p>{stripHtmlTags(item.contents)}</p>
            </div>
            <div className="study-bottom">
              <div className="study-deadline">
                {/* <CalendarIcon />
                <p></p> */}
              </div>
              <div className="study-numbers">
                <ChatIcon stroke="#1B1C3A" />
                <p>{item.comment}</p>
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
