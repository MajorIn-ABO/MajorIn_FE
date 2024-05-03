import { ReactComponent as SettingIcon } from "../../assets/icon/setting.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import { useState } from "react";
import data, { StudyData } from "../../data/StudyData";
import comdata, { CommunityData } from "../../data/CommunityData";
import "../../styles/mypage/MyPost.scss";

const MyPost = () => {
  const [selectedSection, setSelectedSection] = useState("study");

  return (
    <div className="mypost-container">
      <h1>작성한 게시글</h1>
      <ul>
        <li
          onClick={() => setSelectedSection("study")}
          className={selectedSection === "study" ? "selected" : ""}
        >
          스터디
        </li>
        <li
          onClick={() => setSelectedSection("community")}
          className={selectedSection === "community" ? "selected" : ""}
        >
          커뮤니티
        </li>
      </ul>
      <div className="post-container">
        {selectedSection === "study" && (
          <>
            {data.map((item, index) => (
              <div key={index} className="study-list">
                <div className="top">
                  <h1>
                    <span
                      className={`${
                        item.recruiting === "모집중"
                          ? "recruiting"
                          : "completed"
                      }`}
                    >
                      {item.recruiting}
                    </span>
                    {item.title}
                  </h1>
                  <div className="modify">
                    <SettingIcon />
                    <p>수정</p>
                  </div>
                </div>
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
          </>
        )}
        {selectedSection === "community" && (
          <>
            {comdata.map((item, index) => (
              <div key={index} className="community-content">
                <div className="content-top">
                  <span className="category">{item.category}</span>
                  <div>
                    <p>{item.date}</p>
                    <div className="modify">
                      <SettingIcon />
                      <p>수정</p>
                    </div>
                  </div>
                </div>
                <div className="content-middle">
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
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
