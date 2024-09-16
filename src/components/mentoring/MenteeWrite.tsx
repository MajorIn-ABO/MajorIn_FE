import "@/styles/mentoring/MentorWrite.scss";

const MenteeWrite = () => {
  return (
    <div className="mentee-write-container">
      <h1>✏️ 지원서 작성</h1>
      <p>위 신청할 멘토링 정보를 확인하고 지원서를 작성해주세요.</p>
      <form>
        <label htmlFor="reason">지원동기</label>
        <textarea className="reason" name="reason" id="reason" />
        <label htmlFor="add_text">
          멘토에게 하고싶은 말 (나에게 적합한 이유, 가능한 시간대 등)
        </label>
        <textarea className="add_text" name="add_text" id="add_text" />
        <label htmlFor="day">가능한 요일</label>
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
        <div className="button-zip">
          <button>취소</button>
          <button>신청</button>
        </div>
      </form>
    </div>
  );
};
export default MenteeWrite;
