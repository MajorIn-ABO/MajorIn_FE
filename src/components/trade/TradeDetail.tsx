import PriceIcon from "@/assets/icon/price.svg?react";
import SalerIcon from "@/assets/icon/saler.svg?react";
import DamageIcon from "@/assets/icon/damage.svg?react";
import ChatIcon from "@/assets/icon/chat-color.svg?react";
import UserIcon from "@/assets/icon/user.svg?react";
import SendIcon from "@/assets/icon/send.svg?react";
import ReplyIcon from "@/assets/icon/reply.svg?react";
import "@/styles/study/StudyDetail.scss";
import "@/styles/trade/TradeDetail.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BookData, CommentData } from "@/types/Types";
import { fetchData } from "@/api/fetchData";
import { postSold, postTextData } from "@/api/postData";

const TradeDetail = () => {
  const { tradeId } = useParams();
  const parsedTradeId = tradeId ? parseInt(tradeId) : undefined;
  const [comment, setComment] = useState("");
  const [selectedData, setSelectedData] = useState<BookData>();
  const [commentData, setCommentData] = useState<CommentData[]>([]);
  const [replyComment, setReplyComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const storedAuth = localStorage.getItem("auth");
  const auth = storedAuth ? JSON.parse(storedAuth) : null;
  const userId = auth ? auth.user_id : null;

  const fetchTradeData = async () => {
    const data = await fetchData(`/usedbooktrades/posts/${parsedTradeId}/`);
    const comments = await fetchData(
      `/usedbooktrades/posts/comments-by-postid/${parsedTradeId}/`
    );
    setSelectedData(data);
    if (comments) {
      setCommentData(comments.sort((a: any, b: any) => b.id - a.id));
    }
  };

  useEffect(() => {
    if (parsedTradeId) {
      fetchTradeData();
    }
  }, [parsedTradeId]);

  if (!selectedData) {
    return <div>해당 컨텐츠를 찾을 수 없습니다.</div>;
  }

  const handleSellBtnClick = async (id: number) => {
    const response = await postSold(`/usedbooktrades/book/${id}/sold/`);
    if (response) {
      alert("판매완료되었습니다.");
    }
  };

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
      Usedbookpost_id: parsedTradeId,
      contents: comment,
    };

    const response = await postTextData(
      "/usedbooktrades/posts/comments/create/",
      postData
    );
    if (response) {
      await fetchTradeData();
      setComment("");
    }
  };

  const handleReplySubmit = async (
    event: React.FormEvent,
    commentId: number
  ) => {
    event.preventDefault();

    const postData = {
      Usedbookpost_id: parsedTradeId,
      parent_comment: commentId,
      contents: replyComment,
    };

    const response = await postTextData(
      "/usedbooktrades/posts/comments/create/",
      postData
    );
    if (response) {
      await fetchTradeData();
      setReplyComment("");
      setReplyingTo(null);
    }
  };

  const handleReplyClick = (commentId: number) => {
    setReplyingTo(commentId);
    setReplyComment("");
  };

  return (
    <div className="trade-container">
      <div className="trade-detail-container">
        <div className="top">
          <span className={selectedData.is_sold ? "sold-out" : "selling"}>
            {selectedData.is_sold ? "판매완료" : "판매중"}
          </span>
          {selectedData.user_id === userId && !selectedData.is_sold && (
            <button
              className="sold-out"
              onClick={() => handleSellBtnClick(selectedData.id)}
            >
              판매완료하기
            </button>
          )}
          {/* {selectedData.user_id === userId && selectedData.is_sold && (
            <button
              className="selling"
              onClick={() => handleSellBtnClick(selectedData.id)}
            >
              판매중으로 변경
            </button>
          )} */}
        </div>
        <div className="middle">
          <div className="img">
            <img src={selectedData.origin_imgfile} alt="img" />
          </div>
          <div className="description">
            <h1>{selectedData.title}</h1>
            <div>
              <p>{selectedData.author}</p>
              <p>{selectedData.publisher}</p>
            </div>
            <ul>
              <li>
                <PriceIcon />
                {selectedData.price.toLocaleString()}원
              </li>
              <li>
                <SalerIcon />
                {selectedData.school_name} {selectedData.major_name}{" "}
                {String(selectedData.admission_date).slice(-2)}학번
              </li>
              <li>
                <DamageIcon />
                손상도 {selectedData.damage_level}
              </li>
            </ul>
            <p className="info">{selectedData.description}</p>
          </div>
        </div>
        <div className="bottom">
          {selectedData.imgfile !== null && (
            <div className="img-zip">
              <h1>책 상태 사진</h1>
              <img src={selectedData.imgfile} alt="" />
            </div>
          )}
          <div className="posting">
            <p>
              {new Date(selectedData.post_date).toLocaleString("ko-KR", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
            <ChatIcon stroke="#9B9B9B" />
            <p>{selectedData.comment}</p>
          </div>
        </div>
      </div>
      <div className="trade-detail-comment">
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

export default TradeDetail;
