import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import { ReactComponent as ScrapIcon } from "../../assets/icon/scrap-color.svg";
import { ReactComponent as GoodIcon } from "../../assets/icon/good.svg";
import { ReactComponent as BadIcon } from "../../assets/icon/bad.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icon/reply.svg";
import { ReactComponent as SendIcon } from "../../assets/icon/send.svg";
import "../../styles/community/CommunityDetail.scss";
import comdata, { CommunityData } from "../../data/CommunityData";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const CommunityDetail = () => {
  const navigate = useNavigate();
  const { contentId } = useParams();
  const parsedContentId = contentId ? parseInt(contentId) : undefined;
  const selectedData = comdata.find(
    (item) => item.contentId === parsedContentId
  );
  // 각 댓글의 좋아요/싫어요 상태를 관리하는 객체
  const [commentReactions, setCommentReactions] = useState<{
    [key: number]: {
      likeColor: string;
      dislikeColor: string;
      currentColor: string;
      like: number;
    };
  }>({});

  if (!selectedData) {
    return <div>해당 컨텐츠를 찾을 수 없습니다.</div>;
  }
  const commentData = selectedData?.comments || [];

  // 좋아요 클릭 시 색상 변경 함수
  const handleLikeClick = (commentId: number) => {
    setCommentReactions((prevReactions) => {
      const originalLikeCount =
        commentData.find((comment) => comment.commentId === commentId)?.like ||
        0;
      const newLikeCount = originalLikeCount + 1;
      return {
        ...prevReactions,
        [commentId]: {
          ...prevReactions[commentId],
          likeColor: "#FF4A4A",
          dislikeColor: "#BBBBBB",
          currentColor: "#FF4A4A",
          like: newLikeCount,
        },
      };
    });
  };

  // 싫어요 클릭 시 색상 변경 함수
  const handleDislikeClick = (commentId: number) => {
    setCommentReactions((prevReactions) => {
      const originalLikeCount =
        commentData.find((comment) => comment.commentId === commentId)?.like ||
        0;
      const newLikeCount = originalLikeCount - 1;
      return {
        ...prevReactions,
        [commentId]: {
          ...prevReactions[commentId],
          likeColor: "#BBBBBB",
          dislikeColor: "#44B0FF",
          currentColor: "#44B0FF",
          like: newLikeCount,
        },
      };
    });
  };

  const goCommunity = () => {
    navigate("/community");
  };

  return (
    <div className="community-container">
      <div className="community-detail-container">
        <div className="detail-top">
          <span className="category">{selectedData.category}</span>
          <div>
            <p>{selectedData.date}</p>
            <p>{selectedData.writer}</p>
          </div>
        </div>
        <div className="detail-middle">
          <h1>{selectedData.title}</h1>
          <p>{selectedData.content}</p>
        </div>
        <div className="detail-bottom">
          <div className="content-numbers">
            <ChatIcon stroke="#66BB6A" />
            <p className="color-chat">{selectedData.chat}</p>
            <LikeIcon stroke="#FF8181" />
            <p className="color-like">{selectedData.like}</p>
            <ScrapIcon />
            <p className="color-scrap">{selectedData.scrap}</p>
          </div>
        </div>
      </div>
      {commentData?.map((comment, index) => {
        const { likeColor, dislikeColor, currentColor, like } =
          commentReactions[comment.commentId] || {
            likeColor: "#BBBBBB",
            dislikeColor: "#BBBBBB",
            currentColor: "#777777",
            like: comment.like,
          };
        return (
          <div key={index} className="community-comment-container">
            <div className="comment-like">
              <GoodIcon
                onClick={() => handleLikeClick(comment.commentId)}
                fill={likeColor}
                style={{ cursor: "pointer" }}
              />
              <p style={{ color: currentColor }}>{like}</p>
              <BadIcon
                onClick={() => handleDislikeClick(comment.commentId)}
                fill={dislikeColor}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="comment-content">
              <div className="top">
                <div className="top-left">
                  <UserIcon width="24" height="24" />
                  <div>
                    <p>{comment.writer}</p>
                    <p>{comment.date}</p>
                  </div>
                </div>
                <span>
                  <ReplyIcon />
                  답글 달기
                </span>
              </div>
              <p className="bottom">{comment.content}</p>
            </div>
          </div>
        );
      })}
      <div className="community-comment-write">
        <button onClick={goCommunity}>목록으로</button>
        <div>
          <input type="text" placeholder="댓글을 입력하세요." />
          <SendIcon stroke="#ffffff" />
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;
