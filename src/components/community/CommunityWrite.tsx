import "../../styles/community/CommunityWrite.scss";

const CommunityWrite: React.FC<{ onBackToMain: () => void }> = ({
  onBackToMain,
}) => {
  return (
    <div className="community-container">
      <h1>✏️ 커뮤니티 글 작성</h1>
      <p className="title-description">
        커뮤니티 게시판에 질문할 내용, 공유하고 싶은 내용을 작성해주세요.
      </p>
      <form className="community-form">
        <label>제목</label>
        <input type="text" className="title" />
        <label>내용</label>
        <textarea className="content" />
        <div>
          <label>카테고리 선택</label>
          <select>
            <option value="전공질문">학과질문</option>
            <option value="잡담/수다">잡담/수다</option>
            <option value="인턴후기">인턴리뷰</option>
            <option value="대외활동">대외활동</option>
            <option value="우리학교는">우리학교는</option>
          </select>
        </div>
        <div>
          <label>사진 첨부</label>
          <div className="filebox">
            <input type="text" placeholder="사진 첨부" />
            <label htmlFor="file">파일찾기</label>
            <input type="file" id="file" />
          </div>
        </div>
        <div className="button-zip">
          <button onClick={onBackToMain}>취소</button>
          <button onClick={onBackToMain}>등록</button>
        </div>
      </form>
    </div>
  );
};

export default CommunityWrite;
