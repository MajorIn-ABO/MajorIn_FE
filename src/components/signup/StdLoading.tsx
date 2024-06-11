import { useRecoilValue } from "recoil";
import Spinner from "../../assets/img/spin.gif";
// import Spinner from "../../assets/img/spin-ball.gif";
import { loadingState } from "../../data/recoilAtoms";
import styled from "styled-components";

const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background-color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StdLoading = () => {
  const isLoading = useRecoilValue(loadingState);

  if (!isLoading) return null;

  return (
    <SpinnerOverlay>
      <SpinnerContainer>
        <img src={Spinner} alt="Loading..." />
        <h1 style={{ color: "#ffffff" }}>학생증에서 데이터 추출중...</h1>
      </SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default StdLoading;
