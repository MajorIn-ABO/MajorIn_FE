import { Routes, Route, Outlet } from "react-router-dom";
import styled from "styled-components";
import HomeApp from "../pages/home/HomeApp";
import MainApp from "../pages/main/MainApp";
import StudyApp from "../pages/study/StudyApp";
import CommunityApp from "../pages/community/CommunityApp";
import TradeApp from "../pages/trade/TradeApp";
import MyPageApp from "../pages/mypage/MyPageApp";
import LoginApp from "../pages/login/LoginApp";
import SignUpApp from "../pages/signup/SignUpApp";
import Header from "../components/navbar/Header";
import Navbar from "../components/navbar/Navbar";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 1024px;
  // height: 90vh;
  margin: 0 auto;
  padding: 30px 20px;
  background: #fafafa;
  gap: 20px;
`;

const MainLayout = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <Navbar />
        <Outlet />
      </ContentContainer>
    </div>
  );
};

const RouterApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomeApp />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainApp />} />
          <Route path="study" element={<StudyApp />} />
          <Route path="community" element={<CommunityApp />} />
          <Route path="trade" element={<TradeApp />} />
          <Route path="mypage" element={<MyPageApp />} />
        </Route>
        <Route path="/login" element={<LoginApp />} />
        <Route path="/signup" element={<SignUpApp />} />
      </Routes>
    </div>
  );
};

export default RouterApp;
