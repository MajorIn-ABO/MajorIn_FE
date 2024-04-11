import { ReactComponent as PriceIcon } from "../../assets/icon/price.svg";
import { ReactComponent as SalerIcon } from "../../assets/icon/saler.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { useNavigate } from "react-router-dom";
import "../../styles/trade/TradeToday.scss";
import data, { TradeData } from "../../data/TradeData";

const TradeToday = () => {
  const navigate = useNavigate();
  const goTradeItemClick = (tradeId: number) => {
    navigate(`/trade/${tradeId}`);
  };

  return (
    <div className="trade-today-container">
      <h1>📚 오늘 등록된 교재</h1>
      <div className="book-container">
        {data.map((item, index) => (
          <div
            key={index}
            className="book-content"
            onClick={() => goTradeItemClick(item.tradeId)}
          >
            <div className="img">
              <img src={item.img} alt="img" />
            </div>
            <div className="description">
              <span className={item.sale ? "selling" : "sold-out"}>
                {item.sale ? "판매중" : "판매완료"}
              </span>
              <h1>{item.title}</h1>
              <p className="author">{item.author}</p>
              <p className="publish">{item.publish}</p>
              <div>
                <PriceIcon />
                <p className="price">{item.price.toLocaleString()}원</p>
              </div>
              <div>
                <SalerIcon />
                <p className="saler">{item.saler}</p>
              </div>
              <footer>
                <p>{item.posting}</p>
                <ChatIcon stroke="#9B9B9B" />
                <p>{item.chat}</p>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeToday;
