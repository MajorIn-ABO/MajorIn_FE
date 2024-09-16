import data, { TradeData } from "@/data/TradeData";
import PriceIcon from "@/assets/icon/price.svg?react";
import SalerIcon from "@/assets/icon/saler.svg?react";
import ChatIcon from "@/assets/icon/chat-color.svg?react";
import "@/styles/mypage/MyTrade.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchNoMajorTokenData } from "@/api/fetchData";
import { BookData } from "@/types/Types";
import { postSold } from "@/api/postData";

const MyTrade = () => {
  const [tradeData, setTradeData] = useState<BookData[]>([]);
  const storedAuth = localStorage.getItem("auth");
  const auth = storedAuth ? JSON.parse(storedAuth) : null;
  const userId = auth ? auth.user_id : null;

  const fetchUserData = async () => {
    const storedAuth = localStorage.getItem("auth");
    const auth = storedAuth ? JSON.parse(storedAuth) : null;
    const userId = auth ? auth.user_id : null;
    const data = await fetchNoMajorTokenData(
      `/profile/usedbooktrades/${userId}/`
    );
    if (data) {
      setTradeData(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const handleSellBtnClick = async (id: number) => {
    const response = await postSold(`/usedbooktrades/book/${id}/sold/`);
    if (response) {
      alert("판매완료되었습니다.");
      fetchUserData();
    }
  };

  const navigate = useNavigate();
  const goTradeItemClick = (tradeId: number) => {
    navigate(`/main/trade/${tradeId}`);
  };

  return (
    <div className="mytrade-container">
      <h1>중고거래 현황</h1>
      <div className="mytrade">
        {tradeData.map((item, index) => (
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
                {item.user_id === userId && !item.is_sold && (
                  <button
                    className="sold-out"
                    onClick={() => handleSellBtnClick(item.id)}
                  >
                    판매완료하기
                  </button>
                )}
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTrade;
