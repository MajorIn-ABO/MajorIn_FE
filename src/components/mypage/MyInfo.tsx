import SettingIcon from "@/assets/icon/setting.svg?react";
import UserIcon from "@/assets/icon/user.svg?react";
import PersonIcon from "@/assets/icon/user2.svg?react";
import SchoolIcon from "@/assets/icon/school.svg?react";
import EmailIcon from "@/assets/icon/email.svg?react";
import "@/styles/mypage/MyInfo.scss";
import { useState, useEffect } from "react";
import { fetchNoMajorTokenData } from "@/api/fetchData";
import { UserInfo } from "@/types/Types";

const MyInfo = () => {
  const [userData, setUserData] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const storedAuth = localStorage.getItem("auth");
      const auth = storedAuth ? JSON.parse(storedAuth) : null;
      const userId = auth ? auth.user_id : null;
      const data = await fetchNoMajorTokenData(`/profile/users/${userId}/`);
      if (data) {
        setUserData(data);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="myinfo-container">
      <div className="myinfo-modify">
        <SettingIcon />
        <p>개인 정보 수정</p>
      </div>
      <div className="user-img">
        <UserIcon width="128" height="128" />
      </div>
      {userData ? (
        <>
          <div className="info-container">
            <h1>{userData.user_name}님</h1>
            <div className="field-container">
              <div className="field-info">
                <PersonIcon />
                <p>{userData.home_id}</p>
              </div>
              <div className="field-info">
                <SchoolIcon />
                <p>
                  {userData.school_name} {userData.major_name}{" "}
                  {String(userData.admission_date).slice(-2)}학번
                </p>
              </div>
              <div className="field-info">
                <EmailIcon />
                <p>{userData.email}</p>
              </div>
            </div>
          </div>
          <div className="mypost-count">
            <div className="count">
              <p>
                작성한 게시글 <span>{userData.user_post_count}</span>
              </p>
            </div>
            <div className="count">
              <p>
                작성한 댓글 <span>{userData.user_comment_count}</span>
              </p>
            </div>
            <div className="count">
              <p>
                스크랩 <span>{userData.user_bookmark_count}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyInfo;
