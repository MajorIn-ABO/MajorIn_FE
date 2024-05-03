import { ReactComponent as SettingIcon } from "../../assets/icon/setting.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as PersonIcon } from "../../assets/icon/user2.svg";
import { ReactComponent as SchoolIcon } from "../../assets/icon/school.svg";
import { ReactComponent as EmailIcon } from "../../assets/icon/email.svg";
import "../../styles/mypage/MyInfo.scss";

const MyInfo = () => {
  return (
    <div className="myinfo-container">
      <div className="myinfo-modify">
        <SettingIcon />
        <p>개인 정보 수정</p>
      </div>
      <div className="user-img">
        <UserIcon width="128" height="128" />
      </div>
      <div className="info-container">
        <h1>장현정님</h1>
        <div className="field-container">
          <div className="field-info">
            <PersonIcon />
            <p>id</p>
          </div>
          <div className="field-info">
            <SchoolIcon />
            <p>단국대 죽전캠 . 소프트웨어학과 . 20학번</p>
          </div>
          <div className="field-info">
            <EmailIcon />
            <p>32200000@dankook.ac.kr</p>
          </div>
        </div>
      </div>
      <div className="mypost-count">
        <div className="count">
          <p>
            작성한 게시글 <span>5</span>
          </p>
        </div>
        <div className="count">
          <p>
            작성한 댓글 <span>5</span>
          </p>
        </div>
        <div className="count">
          <p>
            스크랩 <span>24</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
