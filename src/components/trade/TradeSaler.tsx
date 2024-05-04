import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as PencilIcon } from "../../assets/icon/pencil.svg";
import { useNavigate } from "react-router-dom";
import "../../styles/trade/TradeSaler.scss";

const TradeSaler = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/trade");
  };
  const goWrite = () => {
    navigate("/trade/write");
  };
  return (
    <div className="trade-saler-container">
      <h1>💬 판매자와 채팅하기</h1>
      <div className="saler-container">
        <UserIcon width="96" height="96" />
        <div className="field-container">
          <h2>단국대학교 소프트웨어학과 20학번</h2>
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
