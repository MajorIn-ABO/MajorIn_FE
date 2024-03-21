import { useParams } from "react-router-dom";
import data, { StudyData } from "../../data/StudyData";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as SendIcon } from "../../assets/icon/send.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icon/reply.svg";
import "../../styles/study/StudyDetail.scss";

const StudyDetail = () => {
  const { studyId } = useParams();
  const parsedStudyId = studyId ? parseInt(studyId) : undefined;
  const selectedData = data.find((item) => item.studyId === parsedStudyId);
  const hashTags = selectedData?.hashtags;

  if (!selectedData) {
    return <div>해당 컨텐츠를 찾을 수 없습니다.</div>;
  }
  const commentData = selectedData?.comments || [];

  return (
    <div className="study-container">
      <div className="study-detail-container">
        <div className="top">
          <div>
            <h1>{selectedData.title}</h1>
            <p>
              {selectedData.school}
              <span> ・ {selectedData.date}</span>
            </p>
          </div>
          <div
            className={`${
              selectedData.recruiting === "모집중" ? "recruiting" : "completed"
            }`}
          >
            {selectedData.recruiting}
          </div>
        </div>
        <div className="middle">{selectedData.description}</div>
        <div className="bottom">
          {hashTags?.map((item, index) => (
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
        {commentData?.map((comment, index) => {
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
        })}
      </div>
    </div>
  );
};

export default StudyDetail;
