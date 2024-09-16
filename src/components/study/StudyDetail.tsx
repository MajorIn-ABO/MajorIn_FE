// import data, { StudyData } from "@/data/StudyData";
import ChatIcon from "@/assets/icon/chat-color.svg?react";
import LikeIcon from "@/assets/icon/like-color.svg?react";
import UserIcon from "@/assets/icon/user.svg?react";
import SendIcon from "@/assets/icon/send.svg?react";
import ReplyIcon from "@/assets/icon/reply.svg?react";
import "@/styles/study/StudyDetail.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { StudyData, CommentData } from "@/types/Types";
import { fetchData, fetchTokenData } from "@/api/fetchData";
import { postTextData } from "@/api/postData";

const StudyDetail = () => {
  const { studyId } = useParams();
  const parsedStudyId = studyId ? parseInt(studyId) : undefined;
  const [comment, setComment] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null); // 어느 댓글에 답근 달고 있는지 추적
  const [liked, setLiked] = useState(false);

  const [selectedData, setSelectedData] = useState<StudyData>();
  const [commentData, setCommentData] = useState<CommentData[]>([]);

  const fetchStudyData = async () => {
    const data = await fetchTokenData(`/studys/posts/${parsedStudyId}/`);
    const comments = await fetchData(
      `/studys/posts/comments-by-postid/${parsedStudyId}/`
    );
    setSelectedData(data);
    setLiked(data.has_liked);
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

  const handleReplyInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReplyComment(event.target.value);
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

  const handleReplySubmit = async (
    event: React.FormEvent,
    commentId: number
  ) => {
    event.preventDefault();

    const postData = {
      studypost_id: parsedStudyId,
      parent_comment: commentId,
      contents: replyComment,
    };

    const response = await postTextData(
      "/studys/posts/comments/create/",
      postData
    );
    if (response) {
      await fetchStudyData();
      setReplyComment("");
      setReplyingTo(null);
    }
  };

  const handleReplyClick = (commentId: number) => {
    setReplyingTo(commentId);
    setReplyComment("");
  };

  const handleLikeClick = async (event: React.FormEvent) => {
    event.preventDefault();
    const postData = {
      studypost_id: parsedStudyId,
    };

    const response = await postTextData(
      `/studys/posts/likes/create/`,
      postData
    );
    if (response) {
      await fetchStudyData();
      setLiked(!liked);
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
          <div>
            {selectedData.hashtags.map((item, index) => (
              <span key={index} className="category">
                #{item}
              </span>
            ))}
          </div>
          <div className="bottom-right">
            <ChatIcon stroke="#1B1C3A" />
            <p>{selectedData.comment}</p>
            {liked ? (
              <LikeIcon
                stroke="#1B1C3A"
                fill="#1B1C3A"
                style={{ cursor: "pointer" }}
                onClick={handleLikeClick}
              />
            ) : (
              <LikeIcon
                stroke="#1B1C3A"
                fill="none"
                style={{ cursor: "pointer" }}
                onClick={handleLikeClick}
              />
            )}
            <p>{selectedData.like}</p>
          </div>
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
              <div className="parent-comment">
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
                  <div onClick={() => handleReplyClick(comment.id)}>
                    <ReplyIcon />
                    <span>답글 달기</span>
                  </div>
                </div>
              </div>
              <div className="reply-comment-container">
                {replyingTo === comment.id && ( // replyingTo가 현재 댓글 ID와 같을 때만 입력 폼을 렌더링합니다.
                  <div style={{ padding: "20px" }}>
                    <form onSubmit={(e) => handleReplySubmit(e, comment.id)}>
                      <input
                        type="text"
                        placeholder="답글을 입력하세요."
                        value={replyComment}
                        onChange={handleReplyInputChange}
                      />
                      <button type="submit">
                        <SendIcon stroke="#1b1c3a" />
                      </button>
                    </form>
                  </div>
                )}
                {comment.comments && comment.comments.length > 0 && (
                  <div className="reply-comment-container has-comments">
                    {comment.comments?.map((reply) => (
                      <div key={reply.commentId} className="reply-container">
                        <div className="info">
                          <div>
                            <UserIcon width="32" height="32" />
                            <p>
                              {reply.school_name} {reply.major_name}{" "}
                              {String(reply.admission_date).slice(-2)}학번{" "}
                            </p>
                          </div>
                          <span>
                            {new Date(reply.comment_date).toLocaleString(
                              "ko-KR",
                              {
                                dateStyle: "medium",
                                timeStyle: "short",
                              }
                            )}
                          </span>
                        </div>
                        <div className="comment">
                          <p>{reply.contents}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudyDetail;
