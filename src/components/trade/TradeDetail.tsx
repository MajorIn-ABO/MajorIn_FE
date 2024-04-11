import { ReactComponent as PriceIcon } from "../../assets/icon/price.svg";
import { ReactComponent as SalerIcon } from "../../assets/icon/saler.svg";
import { ReactComponent as DamageIcon } from "../../assets/icon/damage.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as SendIcon } from "../../assets/icon/send.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icon/reply.svg";
import { useParams } from "react-router-dom";
import data, { TradeData } from "../../data/TradeData";
import "../../styles/study/StudyDetail.scss";
import "../../styles/trade/TradeDetail.scss";

const TradeDetail = () => {
  const { tradeId } = useParams();
  const parsedStudyId = tradeId ? parseInt(tradeId) : undefined;
  const selectedData = data.find((item) => item.tradeId === parsedStudyId);

  if (!selectedData) {
    return <div>해당 컨텐츠를 찾을 수 없습니다.</div>;
  }
  const commentData = selectedData?.comments || [];

  return (
    <div className="trade-container">
      <div className="trade-detail-container">
        <div className="top">
          <span className={selectedData.sale ? "selling" : "sold-out"}>
            {selectedData.sale ? "판매중" : "판매완료"}
          </span>
        </div>
        <div className="bottom">
          <div className="img">
            <img src={selectedData.img} alt="img" />
          </div>
          <div className="description">
            <h1>{selectedData.title}</h1>
            <div>
              <p>{selectedData.author}</p>
              <p>{selectedData.publish}</p>
            </div>
            <ul>
              <li>
                <PriceIcon />
                {selectedData.price.toLocaleString()}원
              </li>
              <li>
                <SalerIcon />
                {selectedData.saler}
              </li>
              <li>
                <DamageIcon />
                손상도 {selectedData.damage_level}
              </li>
            </ul>
            <p className="info">{selectedData.description}</p>
            <div className="posting">
              <p>{selectedData.posting}</p>
              <ChatIcon stroke="#9B9B9B" />
              <p>{selectedData.chat}</p>
            </div>
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

export default TradeDetail;
