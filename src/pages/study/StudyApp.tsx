import StudySearch from "../../components/study/StudySearch";
import StudyList from "../../components/study/StudyList";
import PopularStudy from "../../components/study/PopularStudy";
import styled from "styled-components";

const StudyContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

const StudyContent = styled.div`
  width: 80%;
`;

// const PopularStudyContainer = styled.div`
//   width: 20%;

//   @media (max-width: 1370px) {
//     display: none;
// `;

const StudyApp = () => {
  return (
    <StudyContainer>
      <StudyContent>
        <StudySearch />
        <StudyList />
      </StudyContent>
      {/* <PopularStudyContainer> */}
      <PopularStudy />
      {/* </PopularStudyContainer> */}
    </StudyContainer>
  );
};

export default StudyApp;
