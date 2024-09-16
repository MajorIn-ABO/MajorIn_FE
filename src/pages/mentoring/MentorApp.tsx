import MentorMain from "@/components/mentoring/MentorMain";
import MentorAll from "@/components/mentoring/MentorAll";
import MentorWrite from "@/components/mentoring/MentorWrite";
import MenteeWrite from "@/components/mentoring/MenteeWrite";
import MenteeChat from "@/components/mentoring/MenteeChat";
import MentoringInfo from "@/components/mentoring/MentoringInfo";
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
      <Route
        path="/mentor"
        element={
          <MainContainer>
            <MentorWrite />
          </MainContainer>
        }
      />
      <Route
        path="/mentee"
        element={
          <MainContainer>
            <MentoringInfo />
            <MenteeWrite />
          </MainContainer>
        }
      />
      <Route
        path="/chat"
        element={
          <MainContainer>
            <MenteeChat />
          </MainContainer>
        }
      />
    </Routes>
  );
};

export default MentorApp;
