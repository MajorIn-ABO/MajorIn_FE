import "../../styles/mentoring/MentorWrite.scss";

const MentorWrite = () => {
  return (
    <div className="mentor-write-container">
      <h1>✏️ 멘토링 신청글 작성</h1>
      <p>모집하고 싶은 멘토링에 관한 내용을 작성해주세요.</p>
      <form>
        <label htmlFor="title">제목</label>
        <input type="text" className="title" name="title" id="title" />
        <label htmlFor="subject">주제 (학습, 취업, 대인관계, ...)</label>
        <input type="text" className="subject" name="subject" id="subject" />
        <label htmlFor="description">내용</label>
        <textarea className="description" name="description" id="description" />
        <label>진행방식</label>
        <div className="select">
          <input type="radio" id="online" name="place_type" />
          <label htmlFor="online">온라인</label>
          <input type="radio" id="offline" name="place_type" />
          <label htmlFor="offline">오프라인</label>
        </div>
        <label htmlFor="period">멘토링 기간</label>
        <div className="period">
          <span>시작날짜</span>
          <input type="date" id="period" name="period" />
          <span>종료날짜</span>
          <input type="date" id="period" name="period" />
        </div>
        <label htmlFor="day">멘토링 진행 요일</label>
        <div className="day-checkbox">
          <input type="checkbox" id="monday" name="day" />
          <label htmlFor="monday">월요일</label>
          <input type="checkbox" id="tuesday" name="day" />
          <label htmlFor="tuesday">화요일</label>
          <input type="checkbox" id="wednesday" name="day" />
          <label htmlFor="wednesday">수요일</label>
          <input type="checkbox" id="thirsday" name="day" />
          <label htmlFor="thirsday">목요일</label>
          <input type="checkbox" id="friday" name="day" />
          <label htmlFor="friday">금요일</label>
          <input type="checkbox" id="saturday" name="day" />
          <label htmlFor="saturday">토요일</label>
          <input type="checkbox" id="sunday" name="day" />
          <label htmlFor="sunday">일요일</label>
        </div>
        <label htmlFor="mentee_num">
          참여인원
          <input type="number" id="mentee_num" name="mentee_num" />명
        </label>
        <div className="button-zip">
          <button>취소</button>
          <button>등록</button>
        </div>
      </form>
    </div>
  );
};

export default MentorWrite;
