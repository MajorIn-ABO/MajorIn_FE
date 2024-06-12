import { ReactComponent as SettingIcon } from "../../assets/icon/setting.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as PersonIcon } from "../../assets/icon/user2.svg";
import { ReactComponent as SchoolIcon } from "../../assets/icon/school.svg";
import { ReactComponent as EmailIcon } from "../../assets/icon/email.svg";
import "../../styles/mypage/MyInfo.scss";
import { useState, useEffect } from "react";
import { fetchTokenData } from "../../api/fetchData";
import { UserInfo } from "../../types/Types";

const MyInfo = () => {
  const [userData, setUserData] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const storedAuth = localStorage.getItem("auth");
      const auth = storedAuth ? JSON.parse(storedAuth) : null;
      const userId = auth ? auth.user_id : null;
      const data = await fetchTokenData(`/profile/users/${userId}/`);
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
