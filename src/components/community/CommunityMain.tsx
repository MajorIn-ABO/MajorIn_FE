import SearchIcon from "@/assets/icon/search.svg?react";
import ChatIcon from "@/assets/icon/chat-color.svg?react";
import LikeIcon from "@/assets/icon/like-color.svg?react";
import ScrapIcon from "@/assets/icon/scrap-color.svg?react";
import PencilIcon from "@/assets/icon/pencil.svg?react";
import "@/styles/community/CommunityMain.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "@/api/fetchData";
import { CommunityData } from "@/types/Types";

const CommunityMain = () => {
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
      // if (data) {
      //   setCommunityData(data.sort((a: any, b: any) => b.id - a.id));
      // }
      if (Array.isArray(data)) {
        setCommunityData(data.sort((a, b) => b.id - a.id));
      }
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

  const handleSearchClick = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSearching(true);
  };

  const handleItemClick = (contentId: number) => {
    navigate(`/main/community/${contentId}`);
  };

  const handleWriteClick = () => {
    navigate("/main/community/write");
  };

  return (
    <div className="community-container">
      <form className="search" onSubmit={handleSearchClick}>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={searchKeyword}
          onChange={handleSearchInputChange}
        />
        <button type="submit" onSubmit={handleSearchClick}>
          <SearchIcon onClick={handleSearchClick} />
        </button>
      </form>
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
            onClick={() => setSelectedCategory("학교이야기")}
            className={selectedCategory === "학교이야기" ? "selected" : ""}
          >
            학교이야기
          </li>
        </ul>
        <button onClick={handleWriteClick}>
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
              <p className="color-scrap">{item.bookmark}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityMain;
