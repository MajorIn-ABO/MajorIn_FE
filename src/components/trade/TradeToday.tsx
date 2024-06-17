import { ReactComponent as PriceIcon } from "../../assets/icon/price.svg";
import { ReactComponent as SalerIcon } from "../../assets/icon/saler.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import "../../styles/trade/TradeToday.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../../api/fetchData";
import { BookData } from "../../types/Types";

const TradeToday = () => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState<BookData[]>([]);
  useEffect(() => {
    const fetchBookData = async () => {
      const data = await fetchData("/usedbooktrades/posts/");
      if (data) {
        setBookData(data.sort((a: any, b: any) => b.id - a.id));
      }
    };
    fetchBookData();
  }, []);
  const goTradeItemClick = (tradeId: number) => {
    navigate(`/main/trade/${tradeId}`);
  };

  return (
    <div className="trade-today-container">
      <h1>📚 오늘 등록된 교재</h1>
      <div className="book-container">
        {bookData.map((item, index) => (
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
                  {" "}
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
    </div>
  );
};

export default TradeToday;
