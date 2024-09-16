import MainEmploy from "@/components/main/MainEmploy";
import EmployDetail from "@/components/employ/EmployDetail";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

const EmployContainer = styled.div`
  width: 90%;
  min-height: 100vh;
`;
const EmployApp = () => {
  return (
    <EmployContainer>
      <Routes>
        <Route path="/" element={<MainEmploy />} />
        <Route
          path="/:employId"
          element={
            <>
              <EmployDetail />
              <MainEmploy />
            </>
          }
        />
      </Routes>
    </EmployContainer>
  );
};

export default EmployApp;
