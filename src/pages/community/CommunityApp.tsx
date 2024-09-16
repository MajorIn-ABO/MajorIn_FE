import CommunityMain from "@/components/community/CommunityMain";
import CommunityWrite from "@/components/community/CommunityWrite";
import PopularCommunity from "@/components/community/PopularCommunity";
import CommunityDetail from "@/components/community/CommunityDetail";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

const CommunityContainer = styled.div`
  width: 90%;
  min-height: 100vh;
  // height: 100%;
  display: flex;
  gap: 30px;
`;

const CommunityApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CommunityContainer>
            <CommunityMain />
            <PopularCommunity />
          </CommunityContainer>
        }
      />
      <Route
        path="/:contentId"
        element={
          <CommunityContainer>
            <CommunityDetail />
            <PopularCommunity />
          </CommunityContainer>
        }
      />
      <Route
        path="/write"
        element={
          <CommunityContainer>
            <CommunityWrite />
            <PopularCommunity />
          </CommunityContainer>
        }
      />
    </Routes>
  );
};

export default CommunityApp;
