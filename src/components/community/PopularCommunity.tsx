import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../../api/fetchData";
import { CommunityData } from "../../types/Types";

const PopularCommunity = () => {
  const [communityData, setCommunityData] = useState<CommunityData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCommunityData = async () => {
      const data = await fetchData("/boards/posts/?sort_by=weekly_popular");
      setCommunityData(data);
    };

    fetchCommunityData();
  }, []);

  const handleItemClick = (contentId: number) => {
    navigate(`/community/${contentId}`);
  };

  return (
    <div className="popular-study-container">
      <h1>🔥 주간 인기 게시글</h1>
      <ul>
        {communityData.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item.id)}>
            <p>{item.title}</p>
            <div>
              <img src={require("../../assets/img/dku-logo.png")} alt="logo" />
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

export default PopularCommunity;
