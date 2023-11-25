import { ReactComponent as PriceIcon } from "../../assets/icon/price.svg";
import { ReactComponent as SalerIcon } from "../../assets/icon/saler.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import "../../styles/trade/TradeToday.scss";

const bookData = [
  {
    img: "https://media.wiley.com/product_data/coverImage300/66/11198003/1119800366.jpg",
    sale: true,
    title: "Operating System Concepts",
    // author: "Silberschatz, Avraham, PETER BAER GALVIN, GREG GAGNE 저자(글)",
    author: "Silber",
    publish: "John Wiley & Sons Inc",
    price: "10,000",
    saler: "단국대학교 소프트웨어학과 20학번",
    posting: "35분전",
    chat: 5,
  },
  {
    img: "https://media.wiley.com/product_data/coverImage300/66/11198003/1119800366.jpg",
    sale: true,
    title: "Operating System Concepts",
    // author: "Silberschatz, Avraham, PETER BAER GALVIN, GREG GAGNE 저자(글)",
    author: "Silber",
    publish: "John Wiley & Sons Inc",
    price: "10,000",
    saler: "단국대학교 소프트웨어학과 20학번",
    posting: "35분전",
    chat: 5,
  },
  {
    img: "https://media.wiley.com/product_data/coverImage300/66/11198003/1119800366.jpg",
    sale: true,
    title: "Operating System Concepts",
    // author: "Silberschatz, Avraham, PETER BAER GALVIN, GREG GAGNE 저자(글)",
    author: "Silber",
    publish: "John Wiley & Sons Inc",
    price: "10,000",
    saler: "단국대학교 소프트웨어학과 20학번",
    posting: "35분전",
    chat: 5,
  },
];

const TradeToday = () => {
  return (
    <div className="trade-today-container">
      <h1>📚 오늘 등록된 교재</h1>
      <div className="book-container">
        {bookData.map((item, index) => (
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
                <p className="price">{item.price}원</p>
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
