import { ReactComponent as PriceIcon } from "../../assets/icon/price.svg";
import { ReactComponent as SalerIcon } from "../../assets/icon/saler.svg";
import { ReactComponent as DamageIcon } from "../../assets/icon/damage.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as SendIcon } from "../../assets/icon/send.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icon/reply.svg";
import "../../styles/study/StudyDetail.scss";
import "../../styles/trade/TradeDetail.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BookData } from "../../types/Types";
import { fetchData } from "../../api/fetchData";

const TradeDetail = () => {
  const { tradeId } = useParams();
  const parsedTradeId = tradeId ? parseInt(tradeId) : undefined;
  const [selectedData, setSelectedData] = useState<BookData>();

  useEffect(() => {
    const fetchCommunityData = async () => {
      const data = await fetchData(`/usedbooktrades/posts/${parsedTradeId}/`);
      setSelectedData(data);
    };

    fetchCommunityData();
  }, [parsedTradeId]);

  if (!selectedData) {
    return <div>해당 컨텐츠를 찾을 수 없습니다.</div>;
  }
  // const commentData = selectedData?.comments || [];

  return (
    <div className="trade-container">
      <div className="trade-detail-container">
        <div className="top">
          <span className={selectedData.is_sold ? "sold-out" : "selling"}>
            {selectedData.is_sold ? "판매완료" : "판매중"}
          </span>
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

export default TradeDetail;
