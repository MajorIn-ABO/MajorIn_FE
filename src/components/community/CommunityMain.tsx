import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { ReactComponent as ChatIcon } from "../../assets/icon/chat-color.svg";
import { ReactComponent as LikeIcon } from "../../assets/icon/like-color.svg";
import { ReactComponent as ScrapIcon } from "../../assets/icon/scrap-color.svg";
import { ReactComponent as PencilIcon } from "../../assets/icon/pencil.svg";
import "../../styles/community/CommunityMain.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../api/fetchData";
import { CommunityData } from "../../types/Types";

const CommunityMain: React.FC<{ onWriteButtonClick: () => void }> = ({
  onWriteButtonClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("전체보기");
  const [communityData, setCommunityData] = useState<CommunityData[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCommunityData = async () => {
      let endpoint = "/boards/posts/";
      if (isSearching && searchKeyword) {
        endpoint = `/boards/posts/search/?keyword=${searchKeyword}`;
      }
      const data = await fetchData(endpoint);
      setCommunityData(data);
    };

    fetchCommunityData();
  }, [selectedCategory, searchKeyword, isSearching]);

  const filteredData: CommunityData[] = communityData.filter(
    (item) =>
      selectedCategory === "전체보기" || item.category_name === selectedCategory
  );

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleItemClick = (contentId: number) => {
    navigate(`/community/${contentId}`);
  };

  return (
    <div className="community-container">
      <div className="search">
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={searchKeyword}
          onChange={handleSearchInputChange}
        />
        <SearchIcon onClick={handleSearchClick} />
      </div>
      <div className="community-filtering">
        <ul>
          <li
            onClick={() => setSelectedCategory("전체보기")}
            className={selectedCategory === "전체보기" ? "selected" : ""}
          >
            전체보기
          </li>
          <li
            onClick={() => setSelectedCategory("학과질문")}
            className={selectedCategory === "학과질문" ? "selected" : ""}
          >
            학과질문
          </li>
          <li
            onClick={() => setSelectedCategory("잡담/수다")}
            className={selectedCategory === "잡담/수다" ? "selected" : ""}
          >
            잡담/수다
          </li>
          <li
            onClick={() => setSelectedCategory("인턴리뷰")}
            className={selectedCategory === "인턴리뷰" ? "selected" : ""}
          >
            인턴리뷰
          </li>
          <li
            onClick={() => setSelectedCategory("대외활동")}
            className={selectedCategory === "대외활동" ? "selected" : ""}
          >
            대외활동
          </li>
          <li
            onClick={() => setSelectedCategory("우리학교는")}
            className={selectedCategory === "우리학교는" ? "selected" : ""}
          >
            우리학교는
          </li>
        </ul>
        <button onClick={onWriteButtonClick}>
          <PencilIcon />
          글쓰기
        </button>
      </div>
      {filteredData.map((item, index) => (
        <div
          key={index}
          className="community-content"
          onClick={() => handleItemClick(item.id)}
        >
          <div className="content-top">
            <span className="category">{item.category_name}</span>
            <p>
              {new Date(item.post_date).toLocaleString("ko-KR", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          </div>
          <div className="content-middle">
            <div>
              <h1>{item.title}</h1>
              <p>{item.contents}</p>
            </div>
            {item.imgfile && (
              <div className="content-img">
                <img src={item.imgfile} alt="" />
              </div>
            )}
          </div>
          <div className="content-bottom">
            <p className="writer">
              {item.school_name} {item.major_name}{" "}
              {String(item.admission_date).slice(-2)}학번
            </p>
            <div className="content-numbers">
              <ChatIcon stroke="#66BB6A" />
              <p className="color-chat">{item.comment}</p>
              <LikeIcon stroke="#FF8181" />
              <p className="color-like">{item.like}</p>
              <ScrapIcon />
              <p className="color-scrap">{item.keep}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityMain;
