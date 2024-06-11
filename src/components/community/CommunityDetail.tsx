import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import { ReactComponent as ScrapIcon } from "../../assets/icon/scrap-color.svg";
import { ReactComponent as GoodIcon } from "../../assets/icon/good.svg";
import { ReactComponent as BadIcon } from "../../assets/icon/bad.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icon/reply.svg";
import { ReactComponent as SendIcon } from "../../assets/icon/send.svg";
import "../../styles/community/CommunityDetail.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CommunityData, CommentData } from "../../types/Types";
import { fetchData, fetchTokenData } from "../../api/fetchData";
import { postTextData } from "../../api/postData";

const CommunityDetail = () => {
  const navigate = useNavigate();
  const { contentId } = useParams();
  const parsedContentId = contentId ? parseInt(contentId) : undefined;
  const [comment, setComment] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [scrap, setScrap] = useState(false);

  const [selectedData, setSelectedData] = useState<CommunityData>();
  const [commentData, setCommentData] = useState<CommentData[]>([]);

  const fetchCommunityData = async () => {
    const data = await fetchTokenData(`/boards/posts/${parsedContentId}/`);
    const comments = await fetchData(
      `/boards/posts/comments-by-postid/${parsedContentId}/`
    );
    setSelectedData(data);
    setLiked(data.has_liked);
    setScrap(data.has_bookmarked);
    if (comments) {
      setCommentData(comments.sort((a: any, b: any) => b.id - a.id));
    }
  };

  useEffect(() => {
    if (parsedContentId) {
      fetchCommunityData();
    }
  }, [parsedContentId]);

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
      post_id: parsedContentId,
      contents: comment,
    };

    const response = await postTextData(
      "/boards/posts/comments/create/",
      postData
    );
    if (response) {
      await fetchCommunityData();
      setComment("");
    }
  };

  const handleReplySubmit = async (
    event: React.FormEvent,
    commentId: number
  ) => {
    event.preventDefault();

    const postData = {
      post_id: parsedContentId,
      parent_comment: commentId,
      contents: replyComment,
    };

    const response = await postTextData(
      "/boards/posts/comments/create/",
      postData
    );
    if (response) {
      await fetchCommunityData();
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
      post_id: parsedContentId,
    };

    const response = await postTextData(
      `/boards/posts/likes/create/`,
      postData
    );
    if (response) {
      await fetchCommunityData();
      setLiked(!liked);
    }
  };

  const handleScrapClick = async (event: React.FormEvent) => {
    event.preventDefault();
    const postData = {
      post_id: parsedContentId,
    };

    const response = await postTextData(
      "/boards/posts/bookmarks/create/",
      postData
    );
    if (response) {
      await fetchCommunityData();
      setScrap(!scrap);
    }
  };

  if (!selectedData) {
    return <div>해당 컨텐츠를 찾을 수 없습니다.</div>;
  }

  // 각 댓글의 좋아요/싫어요 상태를 관리하는 객체
  // const [commentReactions, setCommentReactions] = useState<{
  //   [key: number]: {
  //     likeColor: string;
  //     dislikeColor: string;
  //     currentColor: string;
  //     like: number;
  //   };
  // }>({});

  // const commentData = selectedData?.comments || [];

  // 좋아요 클릭 시 색상 변경 함수
  // const handleLikeClick = (commentId: number) => {
  //   setCommentReactions((prevReactions) => {
  //     const originalLikeCount =
  //       commentData.find((comment) => comment.commentId === commentId)?.like ||
  //       0;
  //     const newLikeCount = originalLikeCount + 1;
  //     return {
  //       ...prevReactions,
  //       [commentId]: {
  //         ...prevReactions[commentId],
  //         likeColor: "#FF4A4A",
  //         dislikeColor: "#BBBBBB",
  //         currentColor: "#FF4A4A",
  //         like: newLikeCount,
  //       },
  //     };
  //   });
  // };

  // 싫어요 클릭 시 색상 변경 함수
  // const handleDislikeClick = (commentId: number) => {
  //   setCommentReactions((prevReactions) => {
  //     const originalLikeCount =
  //       commentData.find((comment) => comment.commentId === commentId)?.like ||
  //       0;
  //     const newLikeCount = originalLikeCount - 1;
  //     return {
  //       ...prevReactions,
  //       [commentId]: {
  //         ...prevReactions[commentId],
  //         likeColor: "#BBBBBB",
  //         dislikeColor: "#44B0FF",
  //         currentColor: "#44B0FF",
  //         like: newLikeCount,
  //       },
  //     };
  //   });
  // };

  const goCommunity = () => {
    navigate("/community");
  };

  return (
    <div className="community-container">
      <div className="community-detail-container">
        <div className="detail-top">
          <span className="category">{selectedData.category_name}</span>
          <div>
            <p>
              {new Date(selectedData.post_date).toLocaleString("ko-KR", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
            <p>
              {selectedData.school_name} {selectedData.major_name}{" "}
              {String(selectedData.admission_date).slice(-2)}학번
            </p>
          </div>
        </div>
        <div className="detail-middle">
          <h1>{selectedData.title}</h1>
          <p>{selectedData.contents}</p>
          {selectedData.imgfile && (
            <div className="content-img">
              <img src={selectedData.imgfile} alt="" />
            </div>
          )}
        </div>
        <div className="detail-bottom">
          <div className="content-numbers">
            <ChatIcon stroke="#66BB6A" />
            <p className="color-chat">{selectedData.comment}</p>
            {liked ? (
              <LikeIcon
                stroke="#FF8181"
                fill="#FF8181"
                style={{ cursor: "pointer" }}
                onClick={handleLikeClick}
              />
            ) : (
              <LikeIcon
                stroke="#FF8181"
                fill="none"
                style={{ cursor: "pointer" }}
                onClick={handleLikeClick}
              />
            )}
            {/* <LikeIcon stroke="#FF8181" /> */}
            <p className="color-like">{selectedData.like}</p>
            {scrap ? (
              <ScrapIcon
                fill="#FFC46E"
                style={{ cursor: "pointer" }}
                onClick={handleScrapClick}
              />
            ) : (
              <ScrapIcon
                fill="none"
                style={{ cursor: "pointer" }}
                onClick={handleScrapClick}
              />
            )}
            <p className="color-scrap">{selectedData.bookmark}</p>
          </div>
        </div>
      </div>
      {commentData?.map((comment, index) => {
        // const { likeColor, dislikeColor, currentColor, like } =
        //   commentReactions[comment.commentId] || {
        //     likeColor: "#BBBBBB",
        //     dislikeColor: "#BBBBBB",
        //     currentColor: "#777777",
        //     like: comment.like,
        //   };
        return (
          <div key={index} className="community-comment-container">
            <div className="comment-like">
              <GoodIcon
                // onClick={() => handleLikeClick(comment.commentId)}
                // fill={likeColor}
                fill="#777777"
                style={{ cursor: "pointer" }}
              />
              {/* <p style={{ color: currentColor }}>{like}</p> */}
              <p>5</p>
              <BadIcon
                // onClick={() => handleDislikeClick(comment.commentId)}
                // fill={dislikeColor}
                fill="#777777"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="comment-content">
              <div className="top">
                <div className="top-left">
                  <UserIcon width="24" height="24" />
                  <div>
                    <p>
                      {comment.school_name} {comment.major_name}{" "}
                      {String(comment.admission_date).slice(-2)}학번{" "}
                    </p>
                    <p>
                      {new Date(comment.comment_date).toLocaleString("ko-KR", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>
                </div>
                <span onClick={() => handleReplyClick(comment.id)}>
                  <ReplyIcon />
                  답글 달기
                </span>
              </div>
              <p className="bottom">{comment.contents}</p>
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
          </div>
        );
      })}
      <div className="community-comment-write">
        <button onClick={goCommunity}>목록으로</button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="댓글을 입력하세요."
            value={comment}
            onChange={handleInputChange}
          />
          <SendIcon stroke="#ffffff" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default CommunityDetail;
