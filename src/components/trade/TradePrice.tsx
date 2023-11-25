import { ReactComponent as MoneyIcon } from "../../assets/icon/money-wings.svg";
import "../../styles/trade/TradePrice.scss";

const TradePrice = () => {
  return (
    <div className="trade-price-container">
      <h1>💵 책 시세 확인하기</h1>
      <form>
        <div>
          <label>제목</label>
          <input type="text" />
        </div>
        <div>
          <label>저자</label>
          <input type="text" />
        </div>
        <div>
          <label>출판사</label>
          <input type="text" />
        </div>
      </form>
      <div className="price-result">
        <MoneyIcon />
        <p>책을 검색하고 판매 시세를 확인하세요.</p>
      </div>
      <button>확인</button>
    </div>
  );
};

export default TradePrice;
