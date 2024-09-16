import SearchIcon from "@/assets/icon/search.svg?react";
import PencilIcon from "@/assets/icon/pencil.svg?react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = styled.form`
  width: 100%;
  height: 7vh;
  border-radius: 5px;
  background: #f3f3f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  margin-bottom: 20px;
`;

const SearchButton = styled.button`
  margin: 0;
  padding: 0;
`;

const RegisterBtn = styled.button`
  border-radius: 5px;
  background: #1b1c3a;
  height: 4vh;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  margin-left: auto;
`;

interface TradeSearchProps {
  searchText: string;
  onSearchChange: (filter: string) => void;
}

const TradeSearch: React.FC<TradeSearchProps> = ({ onSearchChange }) => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchText.trim() !== "") {
      onSearchChange(searchText);
    }
    setSearchText("");
  };
  const goWrite = () => {
    navigate("/main/trade/write");
  };

  return (
    <div>
      <SearchBox onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="제목, 저자, 출판사"
          value={searchText}
          onChange={handleInputChange}
          onSubmit={handleSearch}
          style={{ width: "100%" }}
        />
        <SearchButton type="submit" onSubmit={handleSearch}>
          <SearchIcon onClick={handleSearch} />
        </SearchButton>
      </SearchBox>
      <RegisterBtn onClick={goWrite}>
        <PencilIcon />책 판매하기
      </RegisterBtn>
    </div>
  );
};

export default TradeSearch;
