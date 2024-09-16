import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import styled from "styled-components";
import HomeApp from "@/pages/home/HomeApp";
import MainApp from "@/pages/main/MainApp";
import EmployApp from "@/pages/employ/EmployApp";
import EmployDetail from "@/components/employ/EmployDetail";
import StudyApp from "@/pages/study/StudyApp";
import StudyDetail from "@/components/study/StudyDetail";
import CommunityApp from "@/pages/community/CommunityApp";
import CommunityDetail from "@/components/community/CommunityDetail";
import TradeApp from "@/pages/trade/TradeApp";
import TradeDetail from "@/components/trade/TradeDetail";
import MentorApp from "@/pages/mentoring/MentorApp";
import MyPageApp from "@/pages/mypage/MyPageApp";
import LoginApp from "@/pages/login/LoginApp";
import SignUpApp from "@/pages/signup/SignUpApp";
import StdLoading from "@/components/signup/StdLoading";
import Header from "@/components/navbar/Header";
import Navbar from "@/components/navbar/Navbar";

const ContentContainer = styled.div`
  width: 100%;
  min-width: 1024px;
  // height: 90vh;
  margin: 0 auto;
  padding: 30px 20px;
  background: #fafafa;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1480px;
  min-width: 1024px;
  display: flex;
  gap: 20px;
  padding: 0 10px 0 0;
`;

const MainLayout = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <Content>
          <Navbar />
          <Outlet />
        </Content>
      </ContentContainer>
    </div>
  );
};

const RouterApp = () => {
  const authString = localStorage.getItem("auth");
  const auth = authString ? JSON.parse(authString) : { isLoggedIn: false };

  return (
    <div>
      <StdLoading />
      <Routes>
        <Route
          path="/"
          element={
            auth.isLoggedIn ? <Navigate to="/main" replace /> : <HomeApp />
          }
        />
        <Route path="/main" element={<MainLayout />}>
          {/* <Route path="/home" element={<HomeApp />} />
        <Route path="/" element={<MainLayout />}> */}
          <Route index element={<MainApp />} />
          {auth.isLoggedIn && (
            <>
              <Route path="employ/*" element={<EmployApp />}>
                <Route path=":employId" element={<EmployDetail />} />
              </Route>
              <Route path="study/*" element={<StudyApp />}>
                <Route path=":studyId" element={<StudyDetail />} />
              </Route>
              <Route path="community/*" element={<CommunityApp />}>
                <Route path=":contentId" element={<CommunityDetail />} />
              </Route>
              <Route path="trade/*" element={<TradeApp />}>
                <Route path=":tradeId" element={<TradeDetail />} />
              </Route>
              <Route path="mentoring/*" element={<MentorApp />} />
              <Route path="mypage" element={<MyPageApp />} />
            </>
          )}
        </Route>
        <Route path="/login" element={<LoginApp />} />
        <Route path="/signup" element={<SignUpApp />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default RouterApp;
