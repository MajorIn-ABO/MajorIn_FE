// import data, { StudyData } from "../../data/StudyData";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as SendIcon } from "../../assets/icon/send.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icon/reply.svg";
import "../../styles/study/StudyDetail.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { StudyData, CommentData } from "../../types/Types";
import { fetchData } from "../../api/fetchData";
import { postTextData } from "../../api/postData";

const StudyDetail = () => {
  const { studyId } = useParams();
  const parsedStudyId = studyId ? parseInt(studyId) : undefined;
  const [comment, setComment] = useState("");

  const [selectedData, setSelectedData] = useState<StudyData>();
  const [commentData, setCommentData] = useState<CommentData[]>([]);

  const fetchStudyData = async () => {
    const data = await fetchData(`/studys/posts/${parsedStudyId}/`);
    const comments = await fetchData(
      `/studys/posts/comments-by-postid/${parsedStudyId}/`
    );
    setSelectedData(data);
    if (comments) {
      setCommentData(comments.sort((a: any, b: any) => b.id - a.id));
    }
  };

  useEffect(() => {
    if (parsedStudyId) {
      fetchStudyData();
    }
  }, [parsedStudyId]);

  if (!selectedData) {
    return <div>해당 컨텐츠를 찾을 수 없습니다.</div>;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const postData = {
      studypost_id: parsedStudyId,
      contents: comment,
    };

    const response = await postTextData(
      "/studys/posts/comments/create/",
      postData
    );
    if (response) {
      await fetchStudyData();
      setComment("");
    }
  };
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
        <div
          className="middle"
          dangerouslySetInnerHTML={{ __html: selectedData.contents }}
        ></div>
        <div className="study-bottom">
          {selectedData.hashtags.map((item, index) => (
            <span key={index} className="category">
              #{item}
            </span>
          ))}
        </div>
      </div>
      <div className="study-detail-comment">
        <h1>댓글</h1>
        <form onSubmit={handleSubmit}>
          <UserIcon width="48" height="48" />
          <div>
            <input
              type="text"
              placeholder="댓글을 입력하세요."
              value={comment}
              onChange={handleInputChange}
            />
            <button type="submit">
              <SendIcon stroke="#1b1c3a" />
            </button>
          </div>
        </form>
        {commentData?.map((comment, index) => {
          return (
            <div key={index} className="comment-container">
              <div className="info">
                <UserIcon width="48" height="48" />
                <div>
                  <p>
                    {comment.school_name} {comment.major_name}{" "}
                    {String(comment.admission_date).slice(-2)}학번{" "}
                  </p>
                  <span>
                    {new Date(comment.comment_date).toLocaleString("ko-KR", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
              </div>
              <div className="comment">
                <p>{comment.contents}</p>
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
