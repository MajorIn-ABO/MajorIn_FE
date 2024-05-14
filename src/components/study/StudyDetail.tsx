// import data, { StudyData } from "../../data/StudyData";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as SendIcon } from "../../assets/icon/send.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icon/reply.svg";
import "../../styles/study/StudyDetail.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { StudyData } from "../../types/Types";
import { fetchData } from "../../api/fetchData";

const StudyDetail = () => {
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
  // const commentData = selectedData?.comments || [];

  return (
    <div className="study-container">
      <div className="study-detail-container">
        <div className="top">
          <div>
            <h1>{selectedData.title}</h1>
            <p>
              {selectedData.school_name} {selectedData.major_name}{" "}
              {String(selectedData.admission_date).slice(-2)}학번 ·{" "}
              <span>
                {" "}
                ・{" "}
                {new Date(selectedData.post_date).toLocaleString("ko-KR", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </span>
            </p>
          </div>
          <div
            className={`${
              selectedData.is_recruited === false ? "recruiting" : "recruited"
            }`}
          >
            {selectedData.is_recruited === false ? "모집중" : "모집완료"}
          </div>
        </div>
        <div className="middle">{selectedData.contents}</div>
        <div className="bottom">
          {selectedData.hashtags.map((item, index) => (
            <span key={index} className="category">
              #{item}
            </span>
          ))}
        </div>
      </div>
      <div className="study-detail-comment">
        <h1>댓글</h1>
        <form>
          <UserIcon width="48" height="48" />
          <div>
            <input type="text" placeholder="댓글을 입력하세요." />
            <SendIcon stroke="#1b1c3a" />
          </div>
        </form>
        {/* {commentData?.map((comment, index) => {
          return (
            <div key={index} className="comment-container">
              <div className="info">
                <UserIcon width="48" height="48" />
                <div>
                  <p>{comment.writer}</p>
                  <span>{comment.date}</span>
                </div>
              </div>
              <div className="comment">
                <p>{comment.content}</p>
                <div>
                  <ReplyIcon />
                  <span>답글 달기</span>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default StudyDetail;
