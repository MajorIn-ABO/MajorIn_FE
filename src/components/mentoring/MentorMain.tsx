import "../../styles/mentoring/MentorMain.scss";
import { useNavigate } from "react-router-dom";

const MentorMain = () => {
  const navigate = useNavigate();
  const goMentorAll = () => {
    navigate("/main/mentoring/all");
  };
  return (
    <div className="mentor-main-container">
      <div className="mentor-main-top">
        <img src={require("../../assets/img/mentoring1.png")} alt="img" />
        <h1>
          메이저인에서 <br />
          나에게 맞는 멘토링을 찾아보세요.
        </h1>
      </div>
      <div className="mentor-main-middle">
        <p onClick={goMentorAll} style={{ cursor: "pointer" }}>
          참여중인 멘토링 전체보기 <span>&gt;</span>
        </p>
      </div>
      <div className="mentor-main-bottom">
        <div className="mento-apply">
          <h1>멘토 등록</h1>
          <img src={require("../../assets/img/mentoring2.png")} alt="img" />
          <p>
            자신만의 경험, 지식, 노하우를 바탕으로 도움이 필요한 멘티들을 위해
            멘토가 되어주세요.
          </p>
          <button>멘토 등록하러 가기</button>
        </div>
        <div className="mentee-apply">
          <h1>멘티 신청</h1>
          <img src={require("../../assets/img/mentoring3.png")} alt="img" />
          <p>
            학습, 대인관계, 학교생활, 취업상담 등 도움이 필요한 분야의 멘토링을
            신청하세요.
          </p>
          <button>나에게 맞는 멘토링 신청하기</button>
        </div>
      </div>
    </div>
  );
};

export default MentorMain;
