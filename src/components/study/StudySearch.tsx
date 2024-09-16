import SearchIcon from "@/assets/icon/search.svg?react";
import { useState } from "react";
import "@/styles/study/StudySearch.scss";

interface StudySearchProps {
  selectedFilter: string;
  searchText: string;
  onFilterChange: (filter: string) => void;
  onSearchChange: (filter: string) => void;
}

const StudySearch: React.FC<StudySearchProps> = ({
  selectedFilter,
  onFilterChange,
  onSearchChange,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const handleInputChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchText.trim() !== "") {
      setRecentSearches([searchText, ...recentSearches]);
      onSearchChange(searchText);
    }
    setSearchText("");
  };

  const removeSearch = (index: any) => {
    const updatedSearches = [...recentSearches];
    updatedSearches.splice(index, 1);
    setRecentSearches(updatedSearches);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const handleFilterChange = (filter: string) => {
    onFilterChange(filter);
  };

  return (
    <div className="study-sesarch-container">
      <div className="filtering-deadline">
        <ul>
          <li
            className={selectedFilter === "all" ? "selected" : ""}
            onClick={() => handleFilterChange("all")}
          >
            전체보기
          </li>
          <li
            className={selectedFilter === "recruiting" ? "selected" : ""}
            onClick={() => handleFilterChange("recruiting")}
          >
            모집중
          </li>
          <li
            className={selectedFilter === "recruited" ? "selected" : ""}
            onClick={() => handleFilterChange("recruited")}
          >
            모집완료
          </li>
        </ul>
      </div>
      <form className="study-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="관심 스터디를 검색하세요."
          value={searchText}
          onChange={handleInputChange}
          onSubmit={handleSearch}
        />
        <button type="submit" onSubmit={handleSearch}>
          <SearchIcon onClick={handleSearch} />
        </button>
      </form>
      <div className="recent-search">
        <div>
          <h2>최근 검색어</h2>
          <p onClick={clearRecentSearches}>전체 삭제</p>
        </div>
        <div className="search-list">
          <ul>
            {recentSearches.map((search, index) => (
              <li key={index}>
                {search} <span onClick={() => removeSearch(index)}>X</span>
              </li>
            ))}
            <li>
              모각코 <span> X</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudySearch;
