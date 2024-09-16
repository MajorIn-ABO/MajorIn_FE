import "@/styles/study/PopularStudy.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "@/api/fetchData";
import { StudyData } from "@/types/Types";

const PopularStudy = () => {
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
  return (
    <div className="popular-study-container">
      <h1>🔥 주간 인기 스터디</h1>
      <ul>
        {studyData.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item.id)}>
            <p>{item.title}</p>
            <div>
              <img src={require("@/assets/img/dku-logo.png")} alt="logo" />
              <p>
                {item.school_name} {item.major_name}{" "}
                {String(item.admission_date).slice(-2)}학번
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularStudy;
