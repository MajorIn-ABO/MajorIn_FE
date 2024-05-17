import StudySearch from "../../components/study/StudySearch";
import StudyList from "../../components/study/StudyList";
import PopularStudy from "../../components/study/PopularStudy";
import StudyDetail from "../../components/study/StudyDetail";
import StudyWriter from "../../components/study/StudyWriter";
import StudyWrite from "../../components/study/StudyWrite";
import styled from "styled-components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const StudyContainer = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  gap: 30px;
`;

const StudyContent = styled.div`
  width: 80%;
`;

const StudyApp = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  return (
    <StudyContainer>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StudyContent>
                <StudySearch
                  selectedFilter={selectedFilter}
                  searchText={searchText}
                  onSearchChange={setSearchText}
                  onFilterChange={setSelectedFilter}
                />
                <StudyList
                  selectedFilter={selectedFilter}
                  searchText={searchText}
                />
              </StudyContent>
              <PopularStudy />
            </>
          }
        />
        <Route
          path="/:studyId"
          element={
            <>
              <StudyDetail />
              <StudyWriter />
            </>
          }
        />
        <Route
          path="/write"
          element={
            <>
              <StudyContent>
                <StudyWrite />
              </StudyContent>
              <PopularStudy />
            </>
          }
        />
      </Routes>
    </StudyContainer>
  );
};

export default StudyApp;
