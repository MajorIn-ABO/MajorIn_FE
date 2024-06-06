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
import { fetchData } from "../../api/fetchData";
import { postTextData } from "../../api/postData";

const CommunityDetail = () => {
  const navigate = useNavigate();
  const { contentId } = useParams();
  const parsedContentId = contentId ? parseInt(contentId) : undefined;
  const [comment, setComment] = useState("");

  const [selectedData, setSelectedData] = useState<CommunityData>();
  const [commentData, setCommentData] = useState<CommentData[]>([]);

  const fetchCommunityData = async () => {
    const data = await fetchData(`/boards/posts/${parsedContentId}/`);
    const comments = await fetchData(
      `/boards/posts/comments-by-postid/${parsedContentId}/`
    );
    setSelectedData(data);
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const postData = {
      post_id: parsedContentId,
      contents: comment,
    };

    // console.log(postData);
    const response = await postTextData(
      "/boards/posts/comments/create/",
      postData
    );
    if (response) {
      await fetchCommunityData();
      setComment("");
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
            <LikeIcon stroke="#FF8181" />
            <p className="color-like">{selectedData.like}</p>
            <ScrapIcon />
            <p className="color-scrap">{selectedData.keep}</p>
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
                style={{ cursor: "pointer" }}
              />
              {/* <p style={{ color: currentColor }}>{like}</p> */}
              <BadIcon
                // onClick={() => handleDislikeClick(comment.commentId)}
                // fill={dislikeColor}
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
                <span>
                  <ReplyIcon />
                  답글 달기
                </span>
              </div>
              <p className="bottom">{comment.contents}</p>
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
