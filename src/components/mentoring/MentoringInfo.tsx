import "@/styles/mentoring/MentoringInfo.scss";

const MentoringInfo = () => {
  return (
    <div className="mentoring-info-container">
      <h1>🎓 신청할 멘토링</h1>
      <p>신청할 멘토링 정보를 확인하세요.</p>
      <div className="mentoring-info">
        <div className="left">
          <div className="img-box">
            <img
              src="https://watermark.lovepik.com/photo/20211202/large/lovepik-foreign-teacher-smiles-and-writes-a-blackboard-picture_501383572.jpg"
              alt="user"
            />
          </div>
          <h1>👩🏻‍🏫 장현정</h1>
        </div>
        <div className="right">
          <h1>멘토링 제목</h1>
          <p>멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용</p>
          <div className="field-container">
            <div className="field-info">
              <h3>주제</h3>
              <p>주제</p>
            </div>
            <div className="field-info">
              <h3>진행 방식</h3>
              <p>온라인</p>
            </div>
            <div className="field-info">
              <h3>멘토링 기간</h3>
              <p>2024.01.01 ~ 2024.12.31</p>
            </div>
            <div className="field-info">
              <h3>진행 요일</h3>
              <p>월요일, 목요일</p>
            </div>
          </div>
          <h2>현재 신청 인원 &nbsp; | &nbsp; 4 / 5 명</h2>
        </div>
      </div>
    </div>
  );
};

export default MentoringInfo;
