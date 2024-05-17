import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { ReactComponent as PriceIcon } from "../../assets/icon/price.svg";
import { ReactComponent as BookIcon } from "../../assets/icon/book-search.svg";
import "../../styles/trade/TradeWrite.scss";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { bookState } from "../../data/recoilAtoms";
import { fetchData } from "../../api/fetchData";
import { BookSearchData } from "../../types/Types";

const BookSearch: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<BookSearchData | null>(null);
  const [searchBook, setSearchBook] = useState<BookSearchData[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");
  const [bookData, setBookData] = useRecoilState(bookState);

  const fetchSearchData = async (word: string) => {
    const decodedWord = decodeURIComponent(word);
    const data = await fetchData(
      `/usedbooktrades/book/search/?book_title=${decodedWord}`
    );
    setSearchBook(data.book_data_list);
  };

  const handleInputChange = (event: any) => {
    setSearchWord(event.target.value);
  };

  // const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     fetchSearchData(searchWord);
  //   }
  // };

  const handleSearchClick = () => {
    fetchSearchData(searchWord);
  };

  const handleSelectBook = (
    book: BookSearchData,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setSelectedBook(book);
    setBookData({
      title: book.title,
      author: book.author,
      seller: 0,
      publisher: book.publisher,
      origin_imgfile: book.image,
      price: "",
      imgfile: null,
      description: "",
      damage_level: "",
    });
  };

  return (
    <div className="search-book">
      <div className="search-input">
        <input
          type="text"
          placeholder="판매할 교재의 제목을 검색하세요."
          value={searchWord}
          onChange={handleInputChange}
          // onKeyPress={handleKeyPress}
        />
        <SearchIcon onClick={handleSearchClick} style={{ cursor: "pointer" }} />
      </div>
      <div className="search-output">
        {selectedBook === null && searchBook.length === 0 && (
          <div className="no-book">
            <BookIcon />
            <p>판매를 원하는 책을 검색하세요</p>
          </div>
        )}
        {selectedBook && (
          <div key={selectedBook.title} className="book-content selected">
            <div className="img">
              <img src={selectedBook.image} alt="img" />
            </div>
            <div className="description">
              <h1>{selectedBook.title}</h1>
              <p className="author">{selectedBook.author}</p>
              <p className="publish">{selectedBook.publisher}</p>
              <div>
                <PriceIcon />
                <p className="price">
                  {selectedBook.discount.toLocaleString()}원
                </p>
              </div>
            </div>
            <button onClick={() => setSelectedBook(null)} className="cancel">
              취소
            </button>
          </div>
        )}
        {selectedBook === null &&
          searchBook.length > 0 &&
          searchBook.map((book, index) => (
            <div key={index} className="book-content">
              <div className="img">
                <img src={book.image} alt="img" />
              </div>
              <div className="description">
                <h1>{book.title}</h1>
                <p className="author">{book.author}</p>
                <p className="publish">{book.publisher}</p>
                <div>
                  <PriceIcon />
                  <p className="price">{book.discount.toLocaleString()}원</p>
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
