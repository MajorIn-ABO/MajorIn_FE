import MyPost from "@/components/mypage/MyPost";
import MyTrade from "@/components/mypage/MyTrade";
import MyInfo from "@/components/mypage/MyInfo";
import styled from "styled-components";

const MyPageContainer = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  gap: 30px;
`;

const MyPostContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const MyInfoContent = styled.div`
  width: 30%;
`;

const MyPageApp = () => {
  return (
    <MyPageContainer>
      <MyPostContent>
        <MyPost />
        <MyTrade />
      </MyPostContent>
      <MyInfoContent>
        <MyInfo />
      </MyInfoContent>
    </MyPageContainer>
  );
};

export default MyPageApp;
