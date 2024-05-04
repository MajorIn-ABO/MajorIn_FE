import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { ReactComponent as PriceIcon } from "../../assets/icon/price.svg";
import { ReactComponent as BookIcon } from "../../assets/icon/book-search.svg";
import data, { SearchData } from "../../data/SearchData";
import { useState } from "react";
import "../../styles/trade/TradeWrite.scss";

const BookSearch: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<SearchData | null>(null);

  const handleSelectBook = (
    book: SearchData,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setSelectedBook(book);
  };
  return (
    <div className="search-book">
      <div className="search-input">
        <input type="text" placeholder="제목, 저자, 출판사" />
        <SearchIcon />
      </div>
      <div className="search-output">
        {selectedBook === null && data.length === 0 && (
          <div className="no-book">
            <BookIcon />
            <p>판매를 원하는 책을 검색하세요</p>
          </div>
        )}
        {selectedBook && (
          <div key={selectedBook.title} className="book-content selected">
            <div className="img">
              <img src={selectedBook.img} alt="img" />
            </div>
            <div className="description">
              <h1>{selectedBook.title}</h1>
              <p className="author">{selectedBook.author}</p>
              <p className="publish">{selectedBook.publish}</p>
              <div>
                <PriceIcon />
                <p className="price">{selectedBook.price.toLocaleString()}원</p>
              </div>
            </div>
            <button onClick={() => setSelectedBook(null)} className="cancel">
              취소
            </button>
          </div>
        )}
        {selectedBook === null &&
          data.length > 0 &&
          data.map((book, index) => (
            <div key={index} className="book-content">
              <div className="img">
                <img src={book.img} alt="img" />
              </div>
              <div className="description">
                <h1>{book.title}</h1>
                <p className="author">{book.author}</p>
                <p className="publish">{book.publish}</p>
                <div>
                  <PriceIcon />
                  <p className="price">{book.price.toLocaleString()}원</p>
                </div>
              </div>
              <button onClick={(event) => handleSelectBook(book, event)}>
                선택
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookSearch;
