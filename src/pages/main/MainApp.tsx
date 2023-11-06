import MainCommunity from "../../components/main/MainCommunity";
import MainEmploy from "../../components/main/MainEmploy";
import MainStudy from "../../components/main/MainStudy";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  // background: grey;
  display: grid;
  grid-template-columns: 1fr 1fr;
  // grid-template-rows: 1fr 1.2fr;
  row-gap: 40px;
  column-gap: 20px;
`;

const MainCommunityContainer = styled.div`
  grid-column: 1 / span 2;
  grid-rows: 1 / span 1;
`;

const MainApp = () => {
  return (
    <MainContainer>
      <MainCommunityContainer>
        <MainCommunity />
      </MainCommunityContainer>
      <MainStudy />
      <MainEmploy />
    </MainContainer>
  );
};

export default MainApp;
