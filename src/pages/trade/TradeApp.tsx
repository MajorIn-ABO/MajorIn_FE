import TradeSearch from "../../components/trade/TradeSearch";
import TradeToday from "../../components/trade/TradeToday";
import TradeAll from "../../components/trade/TradeAll";
import TradePrice from "../../components/trade/TradePrice";
import styled from "styled-components";

const TradeContainer = styled.div`
  width: 90%;
  display: flex;
  gap: 30px;
`;

const TradeContent = styled.div`
  width: 80%;
`;

const TradeApp = () => {
  return (
    <TradeContainer>
      <TradeContent>
        <TradeSearch />
        <TradeToday />
        <TradeAll />
      </TradeContent>
      <TradePrice />
    </TradeContainer>
  );
};

export default TradeApp;
