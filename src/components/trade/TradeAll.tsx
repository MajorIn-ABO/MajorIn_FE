import { ReactComponent as PriceIcon } from "../../assets/icon/price.svg";
import { ReactComponent as SalerIcon } from "../../assets/icon/saler.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import "../../styles/trade/TradeAll.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../api/fetchData";
import { BookData } from "../../types/Types";

interface TradeSearchProps {
  searchText: string;
}

const TradeAll: React.FC<TradeSearchProps> = ({ searchText }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [bookData, setBookData] = useState<BookData[]>([]);

  useEffect(() => {
    const fetchBookData = async () => {
      let endpoint = "/usedbooktrades/posts/";
      if (searchText.trim() !== "") {
        endpoint = `/usedbooktrades/posts/search/?keyword=${searchText}`;
      }
      const data = await fetchData(endpoint);
      setBookData(data);
    };
    fetchBookData();
  }, [searchText]);

  const handleFilterChange = (filter: any) => {
    setSelectedFilter(filter);
  };
  const bookDataFiltered =
    selectedFilter === "all"
      ? bookData
      : bookData.filter((item) =>
          selectedFilter === "selling" ? !item.is_sold : item.is_sold
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
          onClick={() => goTradeItemClick(item.id)}
        >
          <div className="img">
            <img src={item.origin_imgfile} alt="img" />
          </div>
          <div className="description">
            <span className={item.is_sold ? "sold-out" : "selling"}>
              {item.is_sold ? "판매완료" : "판매중"}
            </span>
            <h1>{item.title}</h1>
            <p className="author">{item.author}</p>
            <p className="publish">{item.publisher}</p>
            <div>
              <PriceIcon />
              <p className="price">{item.price.toLocaleString()}원</p>
            </div>
            <div>
              <SalerIcon />
              <p className="saler">
                {item.school_name} {item.major_name}{" "}
                {String(item.admission_date).slice(-2)}학번
              </p>
            </div>
            <footer>
              <p>
                {new Date(item.post_date).toLocaleString("ko-KR", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
              <ChatIcon stroke="#9B9B9B" />
              <p>{item.comment}</p>
            </footer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradeAll;
