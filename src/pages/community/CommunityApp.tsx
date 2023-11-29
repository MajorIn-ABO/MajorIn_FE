import CommunityMain from "../../components/community/CommunityMain";
import CommunityWrite from "../../components/community/CommunityWrite";
import PopularCommunity from "../../components/community/PopularCommunity";
import styled from "styled-components";
import { useState } from "react";

const CommunityContainer = styled.div`
  width: 90%;
  min-height: 100vh;
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
          <CommunityMain onWriteButtonClick={handleWriteButtonClick} />
          <PopularCommunity />
        </>
      )}
      {/* <CommunityMain />
      <PopularCommunity /> */}
    </CommunityContainer>
  );
};

export default CommunityApp;
