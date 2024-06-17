import { ReactComponent as SettingIcon } from "../../assets/icon/setting.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import { ReactComponent as ScrapIcon } from "../../assets/icon/scrap-color.svg";
import "../../styles/mypage/MyPost.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StudyData, CommunityData } from "../../types/Types";
import { fetchNoMajorTokenData } from "../../api/fetchData";

const MyPost = () => {
  const [selectedSection, setSelectedSection] = useState("study");
  const [studyData, setStudyData] = useState<StudyData[]>([]);
  const [communityData, setCommunityData] = useState<CommunityData[]>([]);
  const navigate = useNavigate();

  const fetchData = async (endpoint: string) => {
    const response = await fetchNoMajorTokenData(endpoint);
    const data = response ? response.sort((a: any, b: any) => b.id - a.id) : [];
    return data;
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    const auth = storedAuth ? JSON.parse(storedAuth) : null;
    const userId = auth ? auth.user_id : null;

    if (selectedSection === "study") {
      fetchData(`/profile/studys/${userId}/`).then(setStudyData);
    } else if (selectedSection === "community") {
      fetchData(`/profile/boards/${userId}/`).then(setCommunityData);
    }
  }, [selectedSection]);

  const handleDataClick = (menu: string) => {
    setSelectedSection(menu);
  };

  const stripHtmlTags = (htmlString: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const handleStudyItemClick = (studyId: number) => {
    navigate(`/main/study/${studyId}`);
  };

  const handleCommunityItemClick = (contentId: number) => {
    navigate(`/main/community/${contentId}`);
  };

  return (
    <div className="mypost-container">
      <h1>작성한 게시글</h1>
      <ul>
        <li
          onClick={() => handleDataClick("study")}
          className={selectedSection === "study" ? "selected" : ""}
        >
          스터디
        </li>
        <li
          onClick={() => handleDataClick("community")}
          className={selectedSection === "community" ? "selected" : ""}
        >
          커뮤니티
        </li>
      </ul>
      <div className="post-container">
        {selectedSection === "study" && (
          <>
            {studyData.map((item, index) => (
              <div
                key={index}
                className="study-list"
                onClick={() => handleStudyItemClick(item.id)}
              >
                <div className="top">
                  <h1>
                    <span
                      className={`${
                        item.is_recruited === false ? "recruiting" : "completed"
                      }`}
                    >
                      {item.is_recruited === false ? "모집중" : "모집완료"}
                    </span>
                    {item.title}
                  </h1>
                  <div className="modify">
                    <SettingIcon />
                    <p>수정</p>
                  </div>
                </div>
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
          </>
        )}
        {selectedSection === "community" && (
          <>
            {communityData.map((item, index) => (
              <div
                key={index}
                className="community-content"
                onClick={() => handleCommunityItemClick(item.id)}
              >
                <div className="content-top">
                  <span className="category">{item.category_name}</span>
                  <div>
                    <p>
                      {new Date(item.post_date).toLocaleString("ko-KR", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                    <div className="modify">
                      <SettingIcon />
                      <p>수정</p>
                    </div>
                  </div>
                </div>
                <div className="content-middle">
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.contents}</p>
                  </div>
                  {item.imgfile && (
                    <div className="content-img">
                      <img src={item.imgfile} alt="" />
                    </div>
                  )}
                </div>
                <div className="content-bottom">
                  <p className="writer">
                    {item.school_name} {item.major_name}{" "}
                    {String(item.admission_date).slice(-2)}학번
                  </p>
                  <div className="content-numbers">
                    <ChatIcon stroke="#66BB6A" />
                    <p className="color-chat">{item.comment}</p>
                    <LikeIcon stroke="#FF8181" />
                    <p className="color-like">{item.like}</p>
                    <ScrapIcon />
                    <p className="color-scrap">{item.bookmark}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyPost;
