import MentorMain from "../../components/mentoring/MentorMain";
import MentorAll from "../../components/mentoring/MentorAll";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

const MainContainer = styled.div`
  width: 90%;
`;

const MentorApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainContainer>
            <MentorMain />
          </MainContainer>
        }
      />
      <Route
        path="/all"
        element={
          <MainContainer>
            <MentorAll />
          </MainContainer>
        }
      />
    </Routes>
  );
};

export default MentorApp;
