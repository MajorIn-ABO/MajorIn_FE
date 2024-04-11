import TradeSearch from "../../components/trade/TradeSearch";
import TradeToday from "../../components/trade/TradeToday";
import TradeAll from "../../components/trade/TradeAll";
import TradePrice from "../../components/trade/TradePrice";
import TradeDetail from "../../components/trade/TradeDetail";
import TradeSaler from "../../components/trade/TradeSaler";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

const TradeContainer = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  gap: 30px;
`;

const TradeContent = styled.div`
  width: 75%;
`;

const TradeApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TradeContainer>
            <TradeContent>
              <TradeSearch />
              <TradeToday />
              <TradeAll />
            </TradeContent>
            <TradePrice />
          </TradeContainer>
        }
      />
      <Route
        path="/:tradeId"
        element={
          <TradeContainer>
            <TradeContent>
              <TradeDetail />
            </TradeContent>
            <TradeSaler />
          </TradeContainer>
        }
      />
    </Routes>
  );
};

export default TradeApp;
