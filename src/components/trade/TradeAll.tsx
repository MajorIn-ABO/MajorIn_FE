import { ReactComponent as PriceIcon } from "../../assets/icon/price.svg";
import { ReactComponent as SalerIcon } from "../../assets/icon/saler.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/trade/TradeAll.scss";
import data, { TradeData } from "../../data/TradeData";

const TradeAll = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const handleFilterChange = (filter: any) => {
    setSelectedFilter(filter);
  };
  const bookDataFiltered =
    selectedFilter === "all"
      ? data
      : data.filter((item) =>
          selectedFilter === "selling" ? item.sale : !item.sale
        );

  const navigate = useNavigate();
  const goTradeItemClick = (tradeId: number) => {
    navigate(`/trade/${tradeId}`);
  };

  return (
    <div className="trade-all-container">
      <h1>📖 전공교재 둘러보기</h1>
      <div className="trade-filtering">
        <ul>
          <li
            className={selectedFilter === "all" ? "selected" : ""}
            onClick={() => handleFilterChange("all")}
          >
            전체보기
          </li>
          <li
            className={selectedFilter === "selling" ? "selected" : ""}
            onClick={() => handleFilterChange("selling")}
          >
            판매중
          </li>
          <li
            className={selectedFilter === "sold-out" ? "selected" : ""}
            onClick={() => handleFilterChange("sold-out")}
          >
            판매완료
          </li>
        </ul>
      </div>
      {bookDataFiltered.map((item, index) => (
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
  );
};

export default TradeAll;
