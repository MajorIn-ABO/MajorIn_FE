import { ReactComponent as PencilIcon } from "../../assets/icon/pencil.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { useParams, useNavigate } from "react-router-dom";
import data, { StudyData } from "../../data/StudyData";
import "../../styles/study/StudyWriter.scss";

const StudyWriter = () => {
  const navigate = useNavigate();
  const { studyId } = useParams();
  const parsedStudyId = studyId ? parseInt(studyId) : undefined;
  const selectedData = data.find((item) => item.studyId === parsedStudyId);
  if (!selectedData) {
    return <div>해당 컨텐츠를 찾을 수 없습니다.</div>;
  }

  const goBack = () => {
    navigate("/study");
  };

  const goWrite = () => {
    navigate("/study/write");
  };

  return (
    <div className="comment-writer-container">
      <div className="top">
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goWrite}>
          <PencilIcon />
          글쓰기
        </button>
      </div>
      <div className="writer">
        <div className="info-top">
          <div className="info">
            <p>{selectedData.school}</p>
            <ul>
              <li>작성한 글수 {selectedData.write}</li>
              <li>관심분야 {selectedData.interest}</li>
            </ul>
          </div>
          <UserIcon width="64" height="64" />
        </div>
        <button>글 작성자와 채팅하기</button>
      </div>
    </div>
  );
};

export default StudyWriter;
