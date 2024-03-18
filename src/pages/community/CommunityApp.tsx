import CommunityMain from "../../components/community/CommunityMain";
import CommunityWrite from "../../components/community/CommunityWrite";
import PopularCommunity from "../../components/community/PopularCommunity";
import CommunityDetail from "../../components/community/CommunityDetail";
import styled from "styled-components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const CommunityContainer = styled.div`
  width: 90%;
  min-height: 100vh;
  // height: 100%;
  display: flex;
  gap: 30px;
`;

const CommunityApp = () => {
  const [isWriting, setIsWriting] = useState(false);

  const handleWriteButtonClick = () => {
    setIsWriting(true);
  };

  const handleBackToMain = () => {
    setIsWriting(false);
  };
  return (
    <CommunityContainer>
      {isWriting ? (
        <>
          <CommunityWrite onBackToMain={handleBackToMain} />
          <PopularCommunity />
        </>
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <CommunityMain onWriteButtonClick={handleWriteButtonClick} />
              }
            />
            <Route path="/:contentId" element={<CommunityDetail />} />
          </Routes>
          {/* <CommunityMain onWriteButtonClick={handleWriteButtonClick} /> */}
          <PopularCommunity />
        </>
      )}
    </CommunityContainer>
  );
};

export default CommunityApp;
