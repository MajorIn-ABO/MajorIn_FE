import CommunityMain from "../../components/community/CommunityMain";
import PopularCommunity from "../../components/community/PopularCommunity";
import styled from "styled-components";

const CommunityContainer = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  gap: 30px;
`;

const CommunityApp = () => {
  return (
    <CommunityContainer>
      <CommunityMain />
      <PopularCommunity />
    </CommunityContainer>
  );
};

export default CommunityApp;
