import MedalIcon from "@/assets/icon/medal.svg?react";
import IconOne from "@/assets/icon/number1.svg?react";
import IconTwo from "@/assets/icon/number2.svg?react";
import IconThree from "@/assets/icon/number3.svg?react";
import IconFour from "@/assets/icon/number4.svg?react";
import ChatIcon from "@/assets/icon/chat-color.svg?react";
import LikeIcon from "@/assets/icon/like-color.svg?react";
import ScrapIcon from "@/assets/icon/scrap-color.svg?react";
import "@/styles/main/MainCommunity.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "@/api/fetchData";
import { CommunityData } from "@/types/Types";

const MainCommunity = () => {
  const [communityData, setCommunityData] = useState<CommunityData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCommunityData = async () => {
      const data = await fetchData("/boards/posts/?sort_by=weekly_popular");
      setCommunityData(data);
    };

    fetchCommunityData();
  }, []);

  const goCommunity = () => {
    navigate("/main/community");
  };

  const handleItemClick = (contentId: number) => {
    navigate(`/main/community/${contentId}`);
  };

  const maskName = (name: string) => {
    if (name.length <= 1) return name;
    return name[0] + "**";
  };

  return (
    <div>
      <div className="title">
        <div>
          <MedalIcon />
          <h1>커뮤니티 인기글</h1>
        </div>
        <p onClick={goCommunity}>
          전체보기 <span>&gt;</span>
        </p>
      </div>
      <div className="content">
        {communityData.slice(0, 4).map((item, index) => (
          <div key={index} className="content-box">
            <div className="content-box-top">
              {index === 0 && <IconOne />}
              {index === 1 && <IconTwo />}
              {index === 2 && <IconThree />}
              {index === 3 && <IconFour />}
              <div className="content-writer-info">
                <div>
                  <p>{maskName(item.user_name)}</p>
                  <p>
                    {new Date(item.post_date).toLocaleString("ko-KR", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
                <p>
                  {item.school_name} {item.major_name}{" "}
                  {String(item.admission_date).slice(-2)}학번
                </p>
              </div>
            </div>
            <div className="content-middle">
              <span className="category">{item.category_name}</span>
              <h1>{item.title}</h1>
              <p>{item.contents}</p>
            </div>
            <div className="content-box-bottom">
              <div className="content-numbers">
                <ChatIcon stroke="#66BB6A" />
                <p className="color-chat">{item.comment}</p>
                <LikeIcon stroke="#FF8181" />
                <p className="color-like">{item.like}</p>
                <ScrapIcon />
                <p className="color-scrap">{item.bookmark}</p>
              </div>
              <button onClick={() => handleItemClick(item.id)}>
                자세히보기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCommunity;
