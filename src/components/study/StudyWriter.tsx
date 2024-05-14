import { ReactComponent as PencilIcon } from "../../assets/icon/pencil.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import "../../styles/study/StudyWriter.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { StudyData } from "../../types/Types";
import { fetchData } from "../../api/fetchData";
// import data, { StudyData } from "../../data/StudyData";

const StudyWriter = () => {
  const navigate = useNavigate();
  const { studyId } = useParams();
  const parsedStudyId = studyId ? parseInt(studyId) : undefined;

  const [selectedData, setSelectedData] = useState<StudyData>();
  useEffect(() => {
    const fetchStudyData = async () => {
      const data = await fetchData(`/studys/posts/${parsedStudyId}/`);
      setSelectedData(data);
    };

    fetchStudyData();
  }, [parsedStudyId]);

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
            <p>
              {selectedData.school_name} {selectedData.major_name}
              <br />
              {String(selectedData.admission_date).slice(-2)}학번
            </p>
            <ul>
              <li>작성한 글수 10</li>
              <li>관심분야 Front-End, DevOps</li>
              {/* <li>작성한 글수 {selectedData.write}</li> */}
              {/* <li>관심분야 {selectedData.interest}</li> */}
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
