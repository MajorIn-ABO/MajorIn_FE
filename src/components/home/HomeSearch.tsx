import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import "../../styles/home/HomeSearch.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchNoMajorData } from "../../api/fetchData";
import { MajorData } from "../../types/Types";

const HomeSearch = () => {
  const [majorData, setMajorData] = useState<MajorData[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMajorData = async () => {
      let endpoint = "/majors/";
      if (searchKeyword) {
        endpoint = `/majors/search/?keyword=${searchKeyword}`;
      }
      const data = await fetchNoMajorData(endpoint);
      if (data) {
        setMajorData(data);
      }
    };

    fetchMajorData();
  }, [searchKeyword]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchKeyword(event.target.value);
  };

  const goMain = (majorId: number) => {
    localStorage.setItem("selected_major_id", majorId.toString());
    navigate("/main");
  };
  return (
    <div className="home-search-container">
      <h1>나에게 맞는 학과 게시판 찾아보기</h1>
      <div className="home-search-box">
        <input
          type="text"
          placeholder="학과, 전공을 검색하세요."
          onChange={handleSearchInputChange}
        />
        <SearchIcon />
      </div>
      {majorData.length > 0 ? (
        majorData.map((item, index) => (
          <div
            key={index}
            className="home-major-list"
            onClick={() => goMain(item.id)}
          >
            <p>{item.major_category_name}</p>
            <span>{item.major}</span>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomeSearch;
