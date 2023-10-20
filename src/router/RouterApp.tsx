import { Routes, Route } from "react-router-dom";
import HomeApp from "../pages/home/HomeApp";
import MainApp from "../pages/main/MainApp";

const RouterApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/main" element={<MainApp />} />
      </Routes>
    </div>
  );
};

export default RouterApp;
