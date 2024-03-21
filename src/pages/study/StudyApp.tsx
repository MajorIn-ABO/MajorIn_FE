import StudySearch from "../../components/study/StudySearch";
import StudyList from "../../components/study/StudyList";
import PopularStudy from "../../components/study/PopularStudy";
import StudyDetail from "../../components/study/StudyDetail";
import StudyWriter from "../../components/study/StudyWriter";
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
                  onFilterChange={setSelectedFilter}
                />
                <StudyList selectedFilter={selectedFilter} />
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
      </Routes>
    </StudyContainer>
  );
};

export default StudyApp;
