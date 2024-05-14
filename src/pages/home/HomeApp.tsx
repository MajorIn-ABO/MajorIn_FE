import styled from "styled-components";
import HomeIntroduce from "../../components/home/HomeIntroduce";
import HomeLogin from "../../components/home/HomeLogin";
import HomeSearch from "../../components/home/HomeSearch";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const HomeLeft = styled.div`
  width: 40%;
  min-height: 100vh;
  max-width: 400px;
  min-width: 350px;
  background: #1b1c3a;
  overflow: auto;
`;

const HomeRight = styled.div`
  flex: 1;
  overflow: auto;
`;

const HomeApp = () => {
  return (
    <HomeContainer>
      <HomeLeft>
        <HomeLogin />
        <hr />
        <HomeSearch />
      </HomeLeft>
      <HomeRight>
        <HomeIntroduce />
      </HomeRight>
    </HomeContainer>
  );
};

export default HomeApp;
