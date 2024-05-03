import data, { TradeData } from "../../data/TradeData";
import { ReactComponent as PriceIcon } from "../../assets/icon/price.svg";
import { ReactComponent as SalerIcon } from "../../assets/icon/saler.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import "../../styles/mypage/MyTrade.scss";

const MyTrade = () => {
  return (
    <div className="mytrade-container">
      <h1>중고거래 현황</h1>
      <div className="mytrade">
        {data.map((item, index) => (
          <div key={index} className="book-content">
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
                <button className={item.sale ? "sold-out" : "selling"}>
                  {item.sale ? "판매완료하기" : "판매중으로 변경"}
                </button>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTrade;
