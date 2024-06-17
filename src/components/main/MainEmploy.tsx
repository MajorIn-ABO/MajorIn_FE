import "../../styles/main/MainEmploy.scss";
import { useNavigate, useLocation } from "react-router-dom";
import data, { EmployData } from "../../data/EmployData";

const MainEmploy = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goEmployAll = () => {
    navigate("/main/employ");
  };
  const goEmployItemClick = (employId: number) => {
    navigate(`/main/employ/${employId}`);
  };
  const isEmployPath = location.pathname !== "/main/employ";

  return (
    <div>
      {isEmployPath && (
        <div className="title">
          <h1>🏢 취업 정보</h1>
          <p onClick={goEmployAll}>
            전체보기 <span>&gt;</span>
          </p>
        </div>
      )}
      <div className="employ-content">
        {data.map((item, index) => (
          <div
            className="employ-box"
            key={index}
            onClick={() => goEmployItemClick(item.employId)}
          >
            <div className="employ-top">
              <img src={item.img} alt="img" />
            </div>
            <div className="employ-middle">
              <div>
                <span className="category">{item.recruit}</span>
                <span>~ {item.deadline}</span>
              </div>
              <div className="employ-info">
                <h1>{item.company}</h1>
                <p>{item.info}</p>
              </div>
            </div>
            <div className="employ-bottom">
              <p>
                자세히보기 <span>&gt;</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainEmploy;
