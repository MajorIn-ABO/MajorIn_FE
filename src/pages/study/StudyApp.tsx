import StudySearch from "../../components/study/StudySearch";
import StudyList from "../../components/study/StudyList";
import PopularStudy from "../../components/study/PopularStudy";
import styled from "styled-components";
import { useState } from "react";

const StudyContainer = styled.div`
  width: 90%;
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
      <StudyContent>
        <StudySearch
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
        <StudyList selectedFilter={selectedFilter} />
      </StudyContent>
      <PopularStudy />
    </StudyContainer>
  );
};

export default StudyApp;
