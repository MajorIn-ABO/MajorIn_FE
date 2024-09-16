import UserIcon from "@/assets/icon/user.svg?react";
import PencilIcon from "@/assets/icon/pencil.svg?react";
import "@/styles/trade/TradeSaler.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "@/api/fetchData";
import { BookData } from "@/types/Types";

const TradeSaler = () => {
  const navigate = useNavigate();
  const { tradeId } = useParams();
  const parsedTradeId = tradeId ? parseInt(tradeId) : undefined;

  const [selectedData, setSelectedData] = useState<BookData>();
  useEffect(() => {
    const fetchStudyData = async () => {
      const data = await fetchData(`/usedbooktrades/posts/${parsedTradeId}/`);
      setSelectedData(data);
    };

    fetchStudyData();
  }, [parsedTradeId]);

  if (!selectedData) {
    return <div>해당 컨텐츠를 찾을 수 없습니다.</div>;
  }
  const goBack = () => {
    navigate("/main/trade");
  };
  const goWrite = () => {
    navigate("/main/trade/write");
  };
  return (
    <div className="trade-saler-container">
      <h1>💬 판매자와 채팅하기</h1>
      <div className="saler-container">
        <UserIcon width="96" height="96" />
        <div className="field-container">
          <h2>
            {selectedData.school_name} {selectedData.major_name}{" "}
            {String(selectedData.admission_date).slice(-2)}학번
          </h2>
          <div className="field-info">
            <h3>작성한 글수</h3>
            <p>10</p>
          </div>
          <div className="field-info">
            <h3>관심분야</h3>
            <p>Front-End, DevOps</p>
          </div>
        </div>
        <button>판매자와 채팅하기</button>
      </div>
      <div className="top">
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goWrite}>
          <PencilIcon />책 판매하기
        </button>
      </div>
    </div>
  );
};

export default TradeSaler;
